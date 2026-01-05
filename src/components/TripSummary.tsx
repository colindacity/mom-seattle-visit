'use client';

import { useMemo } from 'react';
import { Activity, ScheduledItem, TripData } from '@/types/trip';
import {
  DollarSign,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Music,
  Palette,
  TreePine,
  Camera,
  Star,
} from 'lucide-react';

interface TripSummaryProps {
  schedule: Record<string, ScheduledItem[]>;
  getActivity: (id: string) => Activity | undefined;
  tripInfo: TripData;
}

export default function TripSummary({
  schedule,
  getActivity,
  tripInfo,
}: TripSummaryProps) {
  const stats = useMemo(() => {
    const scheduledActivities: Activity[] = [];
    let totalCost = 0;
    let seniorSavings = 0;
    const categories: Record<string, number> = {};
    const cities: Record<string, number> = {};
    const mustDoScheduled: Activity[] = [];
    const fixedDateActivities: { activity: Activity; scheduled: boolean }[] = [];

    // Gather all scheduled activities
    Object.values(schedule).forEach(items => {
      items.forEach(item => {
        const activity = getActivity(item.activityId);
        if (activity) {
          scheduledActivities.push(activity);

          // Calculate costs
          const price = activity.seniorPrice ?? activity.price ?? 0;
          totalCost += price;

          if (activity.seniorPrice && activity.price) {
            seniorSavings += activity.price - activity.seniorPrice;
          }

          // Count categories
          categories[activity.category] = (categories[activity.category] || 0) + 1;

          // Count cities
          cities[activity.city] = (cities[activity.city] || 0) + 1;

          // Track must-do activities
          if (activity.priority === 'must-do') {
            mustDoScheduled.push(activity);
          }
        }
      });
    });

    // Check which fixed-date activities are scheduled
    const allScheduledIds = new Set(scheduledActivities.map(a => a.id));

    return {
      scheduledCount: scheduledActivities.length,
      totalCost,
      seniorSavings,
      categories,
      cities,
      mustDoScheduled,
    };
  }, [schedule, getActivity]);

  const categoryIcons: Record<string, typeof Music> = {
    opera: Music,
    symphony: Music,
    art: Palette,
    nature: TreePine,
    sightseeing: Camera,
  };

  const categoryColors: Record<string, string> = {
    opera: 'text-purple-600 bg-purple-100',
    symphony: 'text-indigo-600 bg-indigo-100',
    art: 'text-pink-600 bg-pink-100',
    nature: 'text-green-600 bg-green-100',
    sightseeing: 'text-amber-600 bg-amber-100',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        Trip Summary
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {/* Activities scheduled */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-medium">Scheduled</span>
          </div>
          <div className="text-2xl font-bold text-blue-700">
            {stats.scheduledCount}
          </div>
          <div className="text-xs text-blue-500">activities</div>
        </div>

        {/* Total cost */}
        <div className="bg-emerald-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-emerald-600 mb-1">
            <DollarSign className="w-4 h-4" />
            <span className="text-xs font-medium">Est. Cost</span>
          </div>
          <div className="text-2xl font-bold text-emerald-700">
            ${stats.totalCost}
          </div>
          <div className="text-xs text-emerald-500">for 2 people</div>
        </div>

        {/* Senior savings */}
        <div className="bg-amber-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-amber-600 mb-1">
            <Star className="w-4 h-4" />
            <span className="text-xs font-medium">Senior Savings</span>
          </div>
          <div className="text-2xl font-bold text-amber-700">
            ${stats.seniorSavings}
          </div>
          <div className="text-xs text-amber-500">saved</div>
        </div>

        {/* Must-do count */}
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-purple-600 mb-1">
            <AlertCircle className="w-4 h-4" />
            <span className="text-xs font-medium">Must-Do</span>
          </div>
          <div className="text-2xl font-bold text-purple-700">
            {stats.mustDoScheduled.length}
          </div>
          <div className="text-xs text-purple-500">booked</div>
        </div>
      </div>

      {/* Category breakdown */}
      {Object.keys(stats.categories).length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            By Category
          </h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.categories).map(([category, count]) => {
              const Icon = categoryIcons[category] || Camera;
              const colors = categoryColors[category] || 'text-gray-600 bg-gray-100';
              return (
                <div
                  key={category}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm ${colors}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-medium capitalize">{category}</span>
                  <span className="text-xs opacity-70">({count})</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* City breakdown */}
      {Object.keys(stats.cities).length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
            By Location
          </h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(stats.cities).map(([city, count]) => (
              <div
                key={city}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
              >
                <span className="font-medium capitalize">{city}</span>
                <span className="text-xs text-gray-500">({count})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {stats.scheduledCount === 0 && (
        <div className="text-center py-6 text-gray-500">
          <Calendar className="w-8 h-8 mx-auto mb-2 text-gray-300" />
          <p className="text-sm">No activities scheduled yet</p>
          <p className="text-xs text-gray-400">Drag activities from the pool to days</p>
        </div>
      )}
    </div>
  );
}
