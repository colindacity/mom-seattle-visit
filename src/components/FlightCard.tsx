'use client';

import { Flight } from '@/types/trip';
import { Plane, Clock } from 'lucide-react';

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  const isArrival = flight.type === 'arrival';

  return (
    <div className={`
      rounded-lg p-2.5 border-l-4
      ${isArrival ? 'bg-green-50 border-l-green-500' : 'bg-blue-50 border-l-blue-500'}
    `}>
      <div className="flex items-center gap-2">
        <Plane className={`w-4 h-4 ${isArrival ? 'text-green-600 rotate-90' : 'text-blue-600 -rotate-90'}`} />
        <div className="flex-1">
          <div className="text-xs font-medium text-gray-900">
            {flight.flightNumber} · {flight.from} → {flight.to}
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <span className="flex items-center gap-0.5">
              <Clock className="w-2.5 h-2.5" />
              {isArrival ? `Arrives ${flight.arrivalTime}` : `Departs ${flight.departureTime}`}
            </span>
            <span>·</span>
            <span>{flight.confirmation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
