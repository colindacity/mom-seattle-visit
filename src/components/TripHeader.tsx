'use client';

import { TripData } from '@/types/trip';
import { format, parseISO, differenceInDays } from 'date-fns';
import { Plane, Calendar, MapPin, User } from 'lucide-react';

interface TripHeaderProps {
  tripInfo: TripData;
}

export default function TripHeader({ tripInfo }: TripHeaderProps) {
  const startDate = parseISO(tripInfo.startDate);
  const endDate = parseISO(tripInfo.endDate);
  const totalDays = differenceInDays(endDate, startDate) + 1;
  const daysUntil = differenceInDays(startDate, new Date());

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1800px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{tripInfo.name}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {tripInfo.visitor}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {format(startDate, 'MMM d')} - {format(endDate, 'MMM d, yyyy')}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Seattle & Portland
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Days counter */}
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{totalDays}</div>
              <div className="text-xs text-gray-500">days</div>
            </div>

            {/* Countdown */}
            {daysUntil > 0 && (
              <div className="px-3 py-1.5 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">{daysUntil}</div>
                <div className="text-[10px] text-blue-500 uppercase tracking-wide">days away</div>
              </div>
            )}

            {/* Flight info quick view */}
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <Plane className="w-4 h-4 text-gray-400" />
              <div className="text-xs">
                <div className="font-medium text-gray-700">
                  {tripInfo.flights[0]?.from} → {tripInfo.flights[0]?.to}
                </div>
                <div className="text-gray-500">
                  {tripInfo.flights[0]?.flightNumber} · {tripInfo.flights[0]?.confirmation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
