'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Activity } from '@/types/trip';
import ActivityCard from './ActivityCard';
import { Package, X } from 'lucide-react';

interface ActivityPoolProps {
  activityIds: string[];
  getActivity: (id: string) => Activity | undefined;
  onClose?: () => void;
  onAutoAdd?: (activity: Activity) => void;
}

export default function ActivityPool({ activityIds, getActivity, onClose, onAutoAdd }: ActivityPoolProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'activity-pool',
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden
        ${isOver ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
      `}
    >
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Activities</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
              {activityIds.length}
            </span>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-200 rounded transition-colors lg:hidden"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="p-3 max-h-[calc(100vh-350px)] overflow-y-auto scrollbar-thin space-y-2">
        <SortableContext items={activityIds} strategy={verticalListSortingStrategy}>
          {activityIds.map(id => {
            const activity = getActivity(id);
            if (!activity) return null;

            return (
              <ActivityCard
                key={id}
                activity={activity}
                sortableId={id}
                onAutoAdd={onAutoAdd}
              />
            );
          })}
        </SortableContext>

        {activityIds.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            All activities scheduled!
          </div>
        )}
      </div>
    </div>
  );
}
