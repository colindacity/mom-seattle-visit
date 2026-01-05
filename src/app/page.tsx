'use client';

import { useState, useMemo, useEffect } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { format, parseISO, eachDayOfInterval, isWeekend, isSameDay } from 'date-fns';
import { tripInfo, activities } from '@/data/tripData';
import { Activity, ScheduledItem } from '@/types/trip';
import ActivityCard from '@/components/ActivityCard';
import DayRow from '@/components/DayRow';
import ActivityPool from '@/components/ActivityPool';
import TripHeader from '@/components/TripHeader';
import TripSummary from '@/components/TripSummary';
import AddCustomEventModal from '@/components/AddCustomEventModal';
import {
  Filter,
  Sparkles,
  RotateCcw,
  List,
  LayoutGrid,
  X,
  Map,
  MapPin,
} from 'lucide-react';
import TripMapWrapper from '@/components/TripMapWrapper';
import ActivityDetailModal from '@/components/ActivityDetailModal';
import TransportationCard from '@/components/TransportationCard';

export default function Home() {
  // Generate all trip days
  const tripDays = useMemo(() => {
    const start = parseISO(tripInfo.startDate);
    const end = parseISO(tripInfo.endDate);
    return eachDayOfInterval({ start, end });
  }, []);

  // State for scheduled items per day
  const [schedule, setSchedule] = useState<Record<string, ScheduledItem[]>>(() => {
    const initial: Record<string, ScheduledItem[]> = {};
    tripDays.forEach(day => {
      initial[format(day, 'yyyy-MM-dd')] = [];
    });
    return initial;
  });

  // State for unscheduled activities (pool)
  const [unscheduled, setUnscheduled] = useState<string[]>(
    activities.map(a => a.id)
  );

  // Filter state
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showPool, setShowPool] = useState(true);
  const [showMap, setShowMap] = useState(false);

  // Modal state
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [showAddEventModal, setShowAddEventModal] = useState(false);

  // Custom events
  const [customEvents, setCustomEvents] = useState<Activity[]>([]);

  // Drag state
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);

  // Combine built-in activities with custom events
  const allActivities = useMemo(() => {
    return [...activities, ...customEvents];
  }, [customEvents]);

  // Load custom events from API
  useEffect(() => {
    async function loadCustomEvents() {
      try {
        const response = await fetch('/api/custom-events');
        const { events } = await response.json();
        if (events) {
          setCustomEvents(events);
        }
      } catch (e) {
        console.error('Failed to load custom events from server');
      }
    }
    loadCustomEvents();
  }, []);

  // Load schedule from API
  useEffect(() => {
    async function loadSchedule() {
      try {
        const response = await fetch('/api/schedule');
        const { schedule: savedSchedule } = await response.json();

        if (savedSchedule && Object.keys(savedSchedule).length > 0) {
          setSchedule(savedSchedule);

          // Calculate unscheduled activities
          const scheduledIds = (Object.values(savedSchedule).flat() as ScheduledItem[])
            .map(item => item.activityId);
          const unscheduledIds = allActivities
            .map(a => a.id)
            .filter(id => !scheduledIds.includes(id));
          setUnscheduled(unscheduledIds);
        }
      } catch (e) {
        console.error('Failed to load schedule from server');
      }
    }
    loadSchedule();
  }, [allActivities]);

  // Save to API (debounced)
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        await fetch('/api/schedule', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ schedule }),
        });
      } catch (e) {
        console.error('Failed to save schedule to server');
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timeoutId);
  }, [schedule]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Get activity by ID
  const getActivity = (id: string) => allActivities.find(a => a.id === id);

  // Add custom event handler
  const handleAddCustomEvent = async (event: Activity) => {
    try {
      const response = await fetch('/api/custom-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });

      if (response.ok) {
        setCustomEvents(prev => [...prev, event]);
        setUnscheduled(prev => [...prev, event.id]);
      }
    } catch (e) {
      console.error('Failed to add custom event');
    }
  };

  // Filter activities
  const filteredActivities = useMemo(() => {
    return unscheduled.filter(id => {
      const activity = getActivity(id);
      if (!activity) return false;
      if (categoryFilter && activity.category !== categoryFilter) return false;
      if (cityFilter && activity.city !== cityFilter) return false;
      return true;
    });
  }, [unscheduled, categoryFilter, cityFilter]);

  // Handle drag start
  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
    const activityId = active.id.toString().replace('scheduled-', '').split('|')[0];
    setActiveActivity(getActivity(activityId) || null);
  };

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      setActiveActivity(null);
      return;
    }

    const activeIdStr = active.id.toString();
    const overIdStr = over.id.toString();

    const isFromPool = !activeIdStr.startsWith('scheduled-');
    const activityId = isFromPool
      ? activeIdStr
      : activeIdStr.replace('scheduled-', '').split('|')[0];

    const isTargetDay = overIdStr.startsWith('day-');
    const targetDate = isTargetDay
      ? overIdStr.replace('day-', '')
      : overIdStr.startsWith('scheduled-')
        ? overIdStr.split('|')[1]
        : null;

    if (targetDate) {
      if (isFromPool) {
        setUnscheduled(prev => prev.filter(id => id !== activityId));
      } else {
        const sourceDate = activeIdStr.split('|')[1];
        if (sourceDate !== targetDate) {
          setSchedule(prev => ({
            ...prev,
            [sourceDate]: prev[sourceDate].filter(item => item.activityId !== activityId)
          }));
        }
      }

      setSchedule(prev => {
        const existing = prev[targetDate] || [];
        const alreadyExists = existing.some(item => item.activityId === activityId);
        if (alreadyExists) return prev;

        const newItem: ScheduledItem = {
          id: `${activityId}-${targetDate}`,
          activityId,
          date: targetDate,
        };

        return {
          ...prev,
          [targetDate]: [...existing, newItem]
        };
      });
    } else if (overIdStr === 'activity-pool' && !isFromPool) {
      const sourceDate = activeIdStr.split('|')[1];
      setSchedule(prev => ({
        ...prev,
        [sourceDate]: prev[sourceDate].filter(item => item.activityId !== activityId)
      }));
      setUnscheduled(prev => [...prev, activityId]);
    }

    setActiveId(null);
    setActiveActivity(null);
  };

  // Remove from schedule
  const removeFromSchedule = (activityId: string, date: string) => {
    setSchedule(prev => ({
      ...prev,
      [date]: prev[date].filter(item => item.activityId !== activityId)
    }));
    setUnscheduled(prev => [...prev, activityId]);
  };

  // Auto-add single activity to its date
  const autoAddActivity = (activity: Activity) => {
    if (!activity.date) return;

    const targetDate = activity.date;
    const existing = schedule[targetDate] || [];

    // Don't add if already scheduled on that date
    if (existing.some(item => item.activityId === activity.id)) return;

    setSchedule(prev => ({
      ...prev,
      [targetDate]: [
        ...(prev[targetDate] || []),
        {
          id: `${activity.id}-${targetDate}`,
          activityId: activity.id,
          date: targetDate,
          startTime: activity.time,
        }
      ]
    }));
    setUnscheduled(prev => prev.filter(id => id !== activity.id));
  };

  // Auto-schedule
  const autoSchedule = () => {
    const newSchedule = { ...schedule };
    const toRemove: string[] = [];

    activities.forEach(activity => {
      if (!unscheduled.includes(activity.id)) return;

      if (activity.date) {
        const existing = newSchedule[activity.date] || [];
        if (!existing.some(item => item.activityId === activity.id)) {
          newSchedule[activity.date] = [
            ...existing,
            {
              id: `${activity.id}-${activity.date}`,
              activityId: activity.id,
              date: activity.date,
              startTime: activity.time,
            }
          ];
          toRemove.push(activity.id);
        }
      }
    });

    setSchedule(newSchedule);
    setUnscheduled(prev => prev.filter(id => !toRemove.includes(id)));
  };

  // Reset schedule
  const resetSchedule = () => {
    const empty: Record<string, ScheduledItem[]> = {};
    tripDays.forEach(day => {
      empty[format(day, 'yyyy-MM-dd')] = [];
    });
    setSchedule(empty);
    setUnscheduled(allActivities.map(a => a.id));
    // Clear server-side schedule
    fetch('/api/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ schedule: empty }),
    }).catch(e => console.error('Failed to clear schedule'));
  };

  // Get special items for a day
  const getFlightsForDay = (date: string) =>
    tripInfo.flights.filter(f => f.date === date);

  const getHotelCheckIn = (date: string) =>
    tripInfo.hotels.filter(h => h.checkIn === date);

  const getHotelCheckOut = (date: string) =>
    tripInfo.hotels.filter(h => h.checkOut === date);

  // Categories
  const categories = [
    { id: 'opera', label: 'Opera', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { id: 'symphony', label: 'Symphony', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { id: 'art', label: 'Art', color: 'bg-pink-100 text-pink-700 border-pink-200' },
    { id: 'nature', label: 'Nature', color: 'bg-green-100 text-green-700 border-green-200' },
    { id: 'sightseeing', label: 'Sightseeing', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  ];

  const cities = [
    { id: 'seattle', label: 'Seattle' },
    { id: 'portland', label: 'Portland' },
    { id: 'tacoma', label: 'Tacoma' },
  ];

  // Group days by week for display
  const weeks = useMemo(() => {
    const result: Date[][] = [];
    let currentWeek: Date[] = [];

    tripDays.forEach((day, index) => {
      currentWeek.push(day);
      // Start new week on Sunday or at end
      if (day.getDay() === 6 || index === tripDays.length - 1) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });

    return result;
  }, [tripDays]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="min-h-screen bg-gray-50">
        <TripHeader tripInfo={tripInfo} />

        <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
          {/* Mobile toolbar */}
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setShowPool(!showPool)}
              className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                showPool ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border border-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Activities</span>
              <span className="bg-white/20 px-1.5 rounded text-xs">{unscheduled.length}</span>
            </button>

            <button
              onClick={autoSchedule}
              className="shrink-0 flex items-center gap-2 px-3 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Auto-Schedule</span>
            </button>

            <button
              onClick={() => setShowAddEventModal(true)}
              className="shrink-0 flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
              title="Add custom event"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Add Event</span>
            </button>

            <button
              onClick={resetSchedule}
              className="shrink-0 flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              title="Reset schedule"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowMap(!showMap)}
              className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                showMap ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
              title="Toggle map"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Map</span>
            </button>

            <div className="h-6 w-px bg-gray-200 shrink-0" />

            {/* Category filters - inline */}
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(categoryFilter === cat.id ? null : cat.id)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  categoryFilter === cat.id
                    ? cat.color + ' ring-2 ring-offset-1 ring-gray-300'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            {/* Activity Pool - Collapsible on mobile */}
            {showPool && (
              <div className="lg:w-80 shrink-0">
                <div className="lg:sticky lg:top-20">
                  <ActivityPool
                    activityIds={filteredActivities}
                    getActivity={getActivity}
                    onClose={() => setShowPool(false)}
                    onAutoAdd={autoAddActivity}
                  />
                </div>
              </div>
            )}

            {/* Main Calendar - Full trip view */}
            <div className="flex-1 min-w-0">
              <div className="space-y-6">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Week header */}
                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-600">
                        Week {weekIndex + 1}: {format(week[0], 'MMM d')} - {format(week[week.length - 1], 'MMM d')}
                      </span>
                    </div>

                    {/* Days in week */}
                    <div className="divide-y divide-gray-100">
                      {week.map(day => {
                        const dateStr = format(day, 'yyyy-MM-dd');
                        const daySchedule = schedule[dateStr] || [];
                        const flights = getFlightsForDay(dateStr);
                        const hotelCheckins = getHotelCheckIn(dateStr);
                        const hotelCheckouts = getHotelCheckOut(dateStr);

                        return (
                          <DayRow
                            key={dateStr}
                            date={day}
                            items={daySchedule}
                            flights={flights}
                            hotelCheckins={hotelCheckins}
                            hotelCheckouts={hotelCheckouts}
                            getActivity={getActivity}
                            onRemove={removeFromSchedule}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trip Summary & Transportation */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TripSummary
                  schedule={schedule}
                  getActivity={getActivity}
                  tripInfo={tripInfo}
                />
                {tripInfo.transportation && (
                  <TransportationCard transportation={tripInfo.transportation} />
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Map Panel - slides in from right */}
        {showMap && (
          <div className="fixed inset-0 z-40 lg:relative lg:inset-auto">
            {/* Backdrop for mobile */}
            <div
              className="absolute inset-0 bg-black/50 lg:hidden"
              onClick={() => setShowMap(false)}
            />

            {/* Map container */}
            <div className="absolute right-0 top-0 bottom-0 w-full max-w-lg lg:max-w-none lg:relative lg:w-full h-full lg:h-[600px] bg-white shadow-xl lg:shadow-none lg:rounded-xl lg:mt-4 lg:mx-4">
              <div className="p-4 border-b lg:hidden flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">Trip Map</h3>
                <button
                  onClick={() => setShowMap(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="h-[calc(100%-60px)] lg:h-full">
                <TripMapWrapper
                  activities={activities}
                  onActivityClick={(activity) => {
                    setSelectedActivity(activity);
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Activity Detail Modal */}
        {selectedActivity && (
          <ActivityDetailModal
            activity={selectedActivity}
            onClose={() => setSelectedActivity(null)}
          />
        )}

        {/* Add Custom Event Modal */}
        <AddCustomEventModal
          isOpen={showAddEventModal}
          onClose={() => setShowAddEventModal(false)}
          onAdd={handleAddCustomEvent}
        />

        {/* Drag overlay */}
        <DragOverlay>
          {activeActivity && (
            <div className="opacity-90 max-w-sm">
              <ActivityCard activity={activeActivity} isDragging />
            </div>
          )}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
