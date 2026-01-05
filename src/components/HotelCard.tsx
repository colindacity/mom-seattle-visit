'use client';

import { Hotel } from '@/types/trip';
import { Building2, LogIn, LogOut, Clock } from 'lucide-react';

interface HotelCardProps {
  hotel: Hotel;
  type: 'checkin' | 'checkout';
}

export default function HotelCard({ hotel, type }: HotelCardProps) {
  const isCheckIn = type === 'checkin';

  return (
    <div className={`
      rounded-lg p-2.5 border-l-4
      ${isCheckIn ? 'bg-teal-50 border-l-teal-500' : 'bg-gray-50 border-l-gray-400'}
    `}>
      <div className="flex items-center gap-2">
        {isCheckIn ? (
          <LogIn className="w-4 h-4 text-teal-600" />
        ) : (
          <LogOut className="w-4 h-4 text-gray-500" />
        )}
        <div className="flex-1">
          <div className="text-xs font-medium text-gray-900">
            {isCheckIn ? 'Check In' : 'Check Out'}: {hotel.name}
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <span className="flex items-center gap-0.5">
              <Clock className="w-2.5 h-2.5" />
              {isCheckIn ? hotel.checkInTime : hotel.checkOutTime}
            </span>
            <span>·</span>
            <span className="truncate">{hotel.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
