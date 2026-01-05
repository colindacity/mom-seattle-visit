'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { format, isToday, isWeekend } from 'date-fns';
import { Activity, ScheduledItem, Flight, Hotel } from '@/types/trip';
import ActivityCard from './ActivityCard';
import FlightCard from './FlightCard';
import HotelCard from './HotelCard';
import { Plus } from 'lucide-react';

interface DayColumnProps {
  date: Date;
  items: ScheduledItem[];
  flights: Flight[];
  hotelCheckins: Hotel[];
  hotelCheckouts: Hotel[];
  getActivity: (id: string) => Activity | undefined;
}

export default function DayColumn({
  date,
  items,
  flights,
  hotelCheckins,
  hotelCheckouts,
  getActivity,
}: DayColumnProps) {
  const dateStr = format(date, 'yyyy-MM-dd');

  const { setNodeRef, isOver } = useDroppable({
    id: `day-${dateStr}`,
  });

  const isPortlandDay = dateStr >= '2026-01-16' && dateStr <= '2026-01-18';
  const isWeekendDay = isWeekend(date);

  // Create sortable IDs for scheduled items
  const sortableIds = items.map(item => `scheduled-${item.activityId}|${dateStr}`);

  return (
    <div
      ref={setNodeRef}
      className={`
        rounded-xl border overflow-hidden transition-all min-h-[400px]
        ${isOver ? 'ring-2 ring-blue-400 bg-blue-50 border-blue-200' : 'bg-white border-gray-100'}
        ${isToday(date) ? 'ring-2 ring-amber-400' : ''}
        ${isPortlandDay ? 'bg-orange-50/50' : ''}
      `}
    >
      {/* Day header */}
      <div className={`
        px-3 py-2 border-b
        ${isWeekendDay ? 'bg-gray-100' : 'bg-gray-50'}
        ${isPortlandDay ? 'bg-orange-100 border-orange-200' : 'border-gray-100'}
      `}>
        <div className="flex items-center justify-between">
          <div>
            <div className={`text-xs font-medium uppercase tracking-wide ${isWeekendDay ? 'text-gray-600' : 'text-gray-400'}`}>
              {format(date, 'EEE')}
            </div>
            <div className="text-lg font-bold text-gray-900">
              {format(date, 'd')}
            </div>
          </div>
          {isPortlandDay && (
            <span className="text-[10px] font-medium text-orange-600 bg-orange-200 px-1.5 py-0.5 rounded">
              Portland
            </span>
          )}
        </div>
      </div>

      {/* Day content */}
      <div className="p-2 space-y-2">
        {/* Flights */}
        {flights.map(flight => (
          <FlightCard key={flight.id} flight={flight} />
        ))}

        {/* Hotel check-ins */}
        {hotelCheckins.map(hotel => (
          <HotelCard key={`checkin-${hotel.id}`} hotel={hotel} type="checkin" />
        ))}

        {/* Scheduled activities */}
        <SortableContext items={sortableIds} strategy={verticalListSortingStrategy}>
          {items.map(item => {
            const activity = getActivity(item.activityId);
            if (!activity) return null;

            return (
              <ActivityCard
                key={item.id}
                activity={activity}
                sortableId={`scheduled-${item.activityId}|${dateStr}`}
                isScheduled
              />
            );
          })}
        </SortableContext>

        {/* Hotel check-outs */}
        {hotelCheckouts.map(hotel => (
          <HotelCard key={`checkout-${hotel.id}`} hotel={hotel} type="checkout" />
        ))}

        {/* Drop zone hint */}
        {items.length === 0 && flights.length === 0 && hotelCheckins.length === 0 && hotelCheckouts.length === 0 && (
          <div className={`
            border-2 border-dashed rounded-lg p-4 text-center transition-colors
            ${isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-200'}
          `}>
            <Plus className={`w-5 h-5 mx-auto mb-1 ${isOver ? 'text-blue-400' : 'text-gray-300'}`} />
            <span className={`text-xs ${isOver ? 'text-blue-500' : 'text-gray-400'}`}>
              Drop here
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
