'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Activity } from '@/types/trip';
import {
  Music,
  Palette,
  TreePine,
  Camera,
  X,
  Clock,
  MapPin,
  DollarSign,
  Star,
  ExternalLink,
} from 'lucide-react';

interface SortableActivityCardProps {
  id: string;
  activity: Activity;
  onRemove?: () => void;
  onClick?: () => void;
  isScheduled?: boolean;
  compact?: boolean;
}

const categoryConfig: Record<string, { icon: typeof Music; color: string; bgColor: string }> = {
  opera: { icon: Music, color: 'text-purple-600', bgColor: 'bg-purple-100 border-purple-200' },
  symphony: { icon: Music, color: 'text-indigo-600', bgColor: 'bg-indigo-100 border-indigo-200' },
  art: { icon: Palette, color: 'text-pink-600', bgColor: 'bg-pink-100 border-pink-200' },
  nature: { icon: TreePine, color: 'text-green-600', bgColor: 'bg-green-100 border-green-200' },
  sightseeing: { icon: Camera, color: 'text-amber-600', bgColor: 'bg-amber-100 border-amber-200' },
};

export default function SortableActivityCard({
  id,
  activity,
  onRemove,
  onClick,
  isScheduled,
  compact,
}: SortableActivityCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const config = categoryConfig[activity.category] || categoryConfig.sightseeing;
  const Icon = config.icon;

  if (compact) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={`
          group relative flex items-center gap-2 px-3 py-2 rounded-lg border
          ${config.bgColor} hover:shadow-md transition-all
          ${isDragging ? 'shadow-lg ring-2 ring-blue-400' : ''}
        `}
      >
        {/* Drag handle area */}
        <div
          {...attributes}
          {...listeners}
          className="flex items-center gap-2 flex-1 min-w-0 cursor-grab"
        >
          <Icon className={`w-4 h-4 shrink-0 ${config.color}`} />
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm text-gray-800 truncate">
              {activity.name}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              {activity.time && (
                <span className="flex items-center gap-0.5">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </span>
              )}
              {activity.price !== undefined && (
                <span className="flex items-center gap-0.5">
                  <DollarSign className="w-3 h-3" />
                  {activity.price === 0 ? 'Free' : `$${activity.seniorPrice || activity.price}`}
                </span>
              )}
              {activity.priority === 'must-do' && (
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              )}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 shrink-0">
          {/* View Details button */}
          {onClick && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="p-1.5 hover:bg-white/50 rounded transition-colors text-blue-600"
              title="View details"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          )}

          {/* Remove button */}
          {onRemove && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/50 rounded transition-opacity"
              title="Remove from schedule"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Full card (for activity pool)
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        group relative p-3 rounded-xl border cursor-grab
        ${config.bgColor} hover:shadow-md transition-all
        ${isDragging ? 'shadow-lg ring-2 ring-blue-400' : ''}
      `}
    >
      {/* Header */}
      <div className="flex items-start gap-2 mb-2">
        <div className={`p-1.5 rounded-lg bg-white/50`}>
          <Icon className={`w-4 h-4 ${config.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-sm leading-tight">
            {activity.name}
          </h3>
          <p className="text-xs text-gray-600 truncate">{activity.venue}</p>
        </div>
        {activity.priority === 'must-do' && (
          <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
        )}
      </div>

      {/* Details */}
      <div className="space-y-1 text-xs text-gray-600">
        {activity.date && (
          <div className="flex items-center gap-1 text-blue-600 font-medium">
            <Clock className="w-3 h-3" />
            Fixed: {activity.date} {activity.time && `at ${activity.time}`}
          </div>
        )}

        <div className="flex items-center gap-3">
          {activity.duration && (
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {activity.duration}
            </span>
          )}
          {activity.price !== undefined && (
            <span className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              {activity.price === 0 ? (
                <span className="text-green-600 font-medium">Free</span>
              ) : activity.seniorPrice ? (
                <span>
                  <span className="line-through text-gray-400">${activity.price}</span>{' '}
                  <span className="text-green-600 font-medium">${activity.seniorPrice}</span>
                </span>
              ) : (
                `$${activity.price}`
              )}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <MapPin className="w-3 h-3" />
          {activity.city}
        </div>
      </div>

      {/* Booking link */}
      {activity.bookingUrl && (
        <a
          href={activity.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-2 flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
        >
          <ExternalLink className="w-3 h-3" />
          Book tickets
        </a>
      )}

      {/* Remove button for scheduled items */}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 hover:bg-white/50 rounded transition-opacity"
        >
          <X className="w-4 h-4 text-gray-500" />
        </button>
      )}
    </div>
  );
}
