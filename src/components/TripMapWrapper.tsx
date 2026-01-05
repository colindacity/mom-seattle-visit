'use client';

import dynamic from 'next/dynamic';
import { Activity } from '@/types/trip';

// Dynamically import TripMap with SSR disabled
const TripMap = dynamic(() => import('./TripMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 rounded-xl flex items-center justify-center">
      <div className="text-gray-400 text-sm">Loading map...</div>
    </div>
  ),
});

interface TripMapWrapperProps {
  activities: Activity[];
  onActivityClick?: (activity: Activity) => void;
}

export default function TripMapWrapper({ activities, onActivityClick }: TripMapWrapperProps) {
  return <TripMap activities={activities} onActivityClick={onActivityClick} />;
}
