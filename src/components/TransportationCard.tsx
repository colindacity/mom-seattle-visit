'use client';

import { Transportation } from '@/types/trip';
import { Car, Train, Bus, Navigation, Clock, MapPin, ExternalLink, Info } from 'lucide-react';

interface TransportationCardProps {
  transportation: Transportation[];
}

const typeIcons = {
  car: Car,
  train: Train,
  bus: Bus,
  shuttle: Bus,
  rideshare: Navigation,
};

const typeColors = {
  car: 'bg-blue-100 text-blue-700 border-blue-200',
  train: 'bg-green-100 text-green-700 border-green-200',
  bus: 'bg-amber-100 text-amber-700 border-amber-200',
  shuttle: 'bg-purple-100 text-purple-700 border-purple-200',
  rideshare: 'bg-pink-100 text-pink-700 border-pink-200',
};

export default function TransportationCard({ transportation }: TransportationCardProps) {
  if (!transportation || transportation.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Car className="w-5 h-5 text-blue-500" />
        Transportation
      </h3>

      <div className="space-y-4">
        {transportation.map((trans) => {
          const Icon = typeIcons[trans.type] || Car;
          const colorClass = typeColors[trans.type] || typeColors.car;

          return (
            <div
              key={trans.id}
              className={`rounded-lg border p-4 ${colorClass}`}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-white/50 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 font-medium">
                    <span>{trans.from}</span>
                    <span className="text-current/60">&rarr;</span>
                    <span>{trans.to}</span>
                  </div>
                  {trans.date && (
                    <div className="text-sm opacity-75 mt-0.5">
                      {trans.date} {trans.departureTime && `at ${trans.departureTime}`}
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-4 text-sm mb-3">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 opacity-70" />
                  <span>{trans.estimatedDuration}</span>
                </div>
                {trans.distance && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 opacity-70" />
                    <span>{trans.distance}</span>
                  </div>
                )}
              </div>

              {/* Notes */}
              {trans.notes && trans.notes.length > 0 && (
                <div className="bg-white/30 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-xs font-medium mb-2 opacity-70">
                    <Info className="w-3.5 h-3.5" />
                    Notes
                  </div>
                  <ul className="space-y-1">
                    {trans.notes.map((note, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="opacity-50">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Booking Link */}
              {trans.bookingUrl && (
                <a
                  href={trans.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View transit options
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
