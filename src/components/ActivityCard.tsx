'use client';

import { Activity } from '@/types/trip';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Music,
  Palette,
  Trees,
  Camera,
  Utensils,
  Clock,
  DollarSign,
  MapPin,
  Calendar,
  CalendarPlus,
  GripVertical,
  ExternalLink,
  Star,
  Ticket,
} from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  isDragging?: boolean;
  isScheduled?: boolean;
  sortableId?: string;
  onAutoAdd?: (activity: Activity) => void;
}

const categoryIcons: Record<string, typeof Music> = {
  opera: Music,
  symphony: Music,
  art: Palette,
  nature: Trees,
  sightseeing: Camera,
  food: Utensils,
};

const categoryColors: Record<string, string> = {
  opera: 'border-l-purple-500 bg-purple-50',
  symphony: 'border-l-indigo-500 bg-indigo-50',
  art: 'border-l-pink-500 bg-pink-50',
  nature: 'border-l-green-500 bg-green-50',
  sightseeing: 'border-l-amber-500 bg-amber-50',
  food: 'border-l-orange-500 bg-orange-50',
  travel: 'border-l-blue-500 bg-blue-50',
  accommodation: 'border-l-teal-500 bg-teal-50',
};

const priorityBadges: Record<string, string> = {
  'must-do': 'bg-red-100 text-red-700',
  'should-do': 'bg-amber-100 text-amber-700',
  'nice-to-have': 'bg-gray-100 text-gray-600',
};

const cityBadges: Record<string, { color: string; label: string }> = {
  seattle: { color: 'bg-blue-500 text-white', label: 'Seattle' },
  portland: { color: 'bg-rose-500 text-white', label: 'Portland' },
  tacoma: { color: 'bg-teal-500 text-white', label: 'Tacoma' },
  olympia: { color: 'bg-purple-500 text-white', label: 'Olympia' },
  'en-route': { color: 'bg-gray-500 text-white', label: 'En Route' },
};

export default function ActivityCard({
  activity,
  isDragging = false,
  isScheduled = false,
  sortableId,
  onAutoAdd,
}: ActivityCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: sortableId || activity.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const Icon = categoryIcons[activity.category] || Camera;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        group rounded-lg border-l-4 shadow-sm transition-all cursor-grab active:cursor-grabbing
        ${categoryColors[activity.category] || 'border-l-gray-400 bg-gray-50'}
        ${isDragging || isSortableDragging ? 'opacity-50 shadow-lg scale-105' : 'hover:shadow-md'}
        ${isScheduled ? 'text-xs' : ''}
      `}
      {...attributes}
      {...listeners}
    >
      <div className={`p-3 ${isScheduled ? 'p-2' : 'p-3'}`}>
        {/* Header */}
        <div className="flex items-start gap-2">
          <div className={`shrink-0 p-1.5 rounded-lg bg-white/60 ${isScheduled ? 'p-1' : 'p-1.5'}`}>
            <Icon className={`${isScheduled ? 'w-3 h-3' : 'w-4 h-4'} text-gray-600`} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className={`font-medium text-gray-900 leading-tight ${isScheduled ? 'text-xs' : 'text-sm'}`}>
                  {activity.name}
                </h3>
                {/* City badge */}
                <span className={`inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] font-semibold ${cityBadges[activity.city]?.color || 'bg-gray-500 text-white'}`}>
                  {cityBadges[activity.city]?.label || activity.city.toUpperCase()}
                </span>
              </div>
              <GripVertical className="w-4 h-4 text-gray-300 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className={`text-gray-500 flex items-center gap-1 mt-0.5 ${isScheduled ? 'text-[10px]' : 'text-xs'}`}>
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{activity.venue}</span>
            </div>
          </div>
        </div>

        {/* Details - show more for non-scheduled cards */}
        {!isScheduled && (
          <>
            <p className="text-xs text-gray-600 mt-2 line-clamp-2">
              {activity.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {activity.date && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-medium">
                  <Calendar className="w-2.5 h-2.5" />
                  {activity.date} {activity.time && `@ ${activity.time}`}
                </span>
              )}

              {activity.duration && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-white rounded text-[10px] text-gray-600">
                  <Clock className="w-2.5 h-2.5" />
                  {activity.duration}
                </span>
              )}

              {activity.distance && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-medium">
                  <MapPin className="w-2.5 h-2.5" />
                  {activity.distance}
                </span>
              )}

              {activity.seniorPrice !== undefined && activity.seniorPrice > 0 && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                  <DollarSign className="w-2.5 h-2.5" />
                  ${activity.seniorPrice}
                </span>
              )}

              {activity.price === 0 && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-medium">
                  FREE
                </span>
              )}

              {activity.priority && (
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${priorityBadges[activity.priority]}`}>
                  {activity.priority === 'must-do' && '★ '}
                  {activity.priority.replace('-', ' ')}
                </span>
              )}
            </div>

            {/* Senior discount */}
            {activity.seniorDiscount && (
              <div className="mt-2 p-1.5 bg-amber-50 rounded text-[10px] text-amber-700">
                <strong>Senior:</strong> {activity.seniorDiscount}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center gap-2 mt-2">
              {/* Auto-add button for dated activities */}
              {activity.date && onAutoAdd && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onAutoAdd(activity);
                  }}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500 text-white rounded text-[10px] font-medium hover:bg-emerald-600 transition-colors"
                >
                  <CalendarPlus className="w-3 h-3" />
                  Add to {activity.date.slice(5)}
                </button>
              )}

              {/* Booking link */}
              {activity.bookingUrl && activity.bookingRequired && (
                <a
                  href={activity.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-[10px] font-medium hover:bg-blue-200 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Ticket className="w-3 h-3" />
                  Book
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              )}
            </div>
          </>
        )}

        {/* Compact view for scheduled items */}
        {isScheduled && (
          <div className="flex items-center gap-2 mt-1">
            {activity.time && (
              <span className="text-[10px] text-gray-500">{activity.time}</span>
            )}
            <span className="text-[10px] text-gray-400">{activity.duration}</span>
          </div>
        )}
      </div>
    </div>
  );
}
