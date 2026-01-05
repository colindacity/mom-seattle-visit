'use client';

import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { format, isWeekend, isToday } from 'date-fns';
import { Activity, ScheduledItem, Flight, Hotel } from '@/types/trip';
import SortableActivityCard from './SortableActivityCard';
import ActivityDetailModal from './ActivityDetailModal';
import { Plane, Building2, Briefcase, Coffee } from 'lucide-react';

// Portland trip dates - January 16-18, 2026
const PORTLAND_START = '2026-01-16';
const PORTLAND_END = '2026-01-18';

interface DayRowProps {
  date: Date;
  items: ScheduledItem[];
  flights: Flight[];
  hotelCheckins: Hotel[];
  hotelCheckouts: Hotel[];
  getActivity: (id: string) => Activity | undefined;
  onRemove: (activityId: string, date: string) => void;
}

export default function DayRow({
  date,
  items,
  flights,
  hotelCheckins,
  hotelCheckouts,
  getActivity,
  onRemove,
}: DayRowProps) {
  const dateStr = format(date, 'yyyy-MM-dd');
  const isWeekendDay = isWeekend(date);
  const isTodayDate = isToday(date);

  // Check if this is a Portland trip date
  const isPortlandDate = dateStr >= PORTLAND_START && dateStr <= PORTLAND_END;

  const { setNodeRef, isOver } = useDroppable({
    id: `day-${dateStr}`,
  });

  const hasContent = items.length > 0 || flights.length > 0 || hotelCheckins.length > 0 || hotelCheckouts.length > 0;

  // State for showing activity detail modal
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Get background color based on date type
  const getRowBgColor = () => {
    if (isOver) return 'bg-blue-50';
    if (isTodayDate) return 'bg-amber-50';
    if (isPortlandDate) return 'bg-rose-50/70';
    if (isWeekendDay) return 'bg-slate-100/70';
    return '';
  };

  // Get border color
  const getBorderClass = () => {
    if (isTodayDate) return 'border-l-4 border-amber-400';
    if (isPortlandDate) return 'border-l-4 border-rose-400';
    if (isWeekendDay) return 'border-l-4 border-slate-300';
    return 'border-l-4 border-transparent';
  };

  return (
    <>
      <div
        ref={setNodeRef}
        className={`
          flex flex-col sm:flex-row gap-2 sm:gap-4 p-3 sm:p-4 transition-colors min-h-[80px]
          ${getRowBgColor()}
          ${getBorderClass()}
        `}
      >
        {/* Date column */}
        <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-0 sm:w-24 shrink-0">
          <div className={`
            text-2xl sm:text-3xl font-bold
            ${isTodayDate ? 'text-amber-600' : isPortlandDate ? 'text-rose-600' : isWeekendDay ? 'text-slate-400' : 'text-gray-700'}
          `}>
            {format(date, 'd')}
          </div>
          <div className="flex sm:flex-col gap-1 sm:gap-0">
            <span className={`
              text-xs font-medium uppercase tracking-wide
              ${isTodayDate ? 'text-amber-600' : isPortlandDate ? 'text-rose-500' : 'text-gray-500'}
            `}>
              {format(date, 'EEE')}
            </span>
            <span className="text-xs text-gray-400 hidden sm:block">
              {format(date, 'MMM')}
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1 sm:mt-1">
            {isTodayDate && (
              <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.5 rounded-full font-medium">
                TODAY
              </span>
            )}
            {isPortlandDate && (
              <span className="text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded-full font-medium">
                PDX
              </span>
            )}
            {isWeekendDay && !isTodayDate && (
              <span className="text-[10px] bg-slate-400 text-white px-1.5 py-0.5 rounded-full font-medium flex items-center gap-0.5">
                <Coffee className="w-2.5 h-2.5" />
              </span>
            )}
            {!isWeekendDay && !isTodayDate && !isPortlandDate && (
              <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-medium flex items-center gap-0.5">
                <Briefcase className="w-2.5 h-2.5" />
              </span>
            )}
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 min-w-0">
          {/* Fixed items (flights, hotels) */}
          {(flights.length > 0 || hotelCheckins.length > 0 || hotelCheckouts.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-2">
              {flights.map((flight, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-sm">
                  <Plane className="w-4 h-4" />
                  <span className="font-medium">{flight.flightNumber}</span>
                  <span className="text-blue-600">
                    {flight.from} &rarr; {flight.to}
                  </span>
                  <span className="text-blue-500 text-xs">{flight.departureTime}</span>
                </div>
              ))}
              {hotelCheckins.map((hotel, i) => (
                <div key={`in-${i}`} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-sm">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">Check-in:</span>
                  <span>{hotel.name}</span>
                </div>
              ))}
              {hotelCheckouts.map((hotel, i) => (
                <div key={`out-${i}`} className="flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-800 rounded-lg text-sm">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">Check-out:</span>
                  <span>{hotel.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* Scheduled activities */}
          <SortableContext
            items={items.map(item => `scheduled-${item.activityId}|${dateStr}`)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-wrap gap-2">
              {items.map(item => {
                const activity = getActivity(item.activityId);
                if (!activity) return null;
                return (
                  <SortableActivityCard
                    key={item.id}
                    id={`scheduled-${item.activityId}|${dateStr}`}
                    activity={activity}
                    onRemove={() => onRemove(item.activityId, dateStr)}
                    onClick={() => setSelectedActivity(activity)}
                    isScheduled
                    compact
                  />
                );
              })}

              {/* Empty state */}
              {!hasContent && (
                <div className="text-gray-400 text-sm italic py-2">
                  Drag activities here
                </div>
              )}
            </div>
          </SortableContext>
        </div>
      </div>

      {/* Activity Detail Modal */}
      {selectedActivity && (
        <ActivityDetailModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </>
  );
}
