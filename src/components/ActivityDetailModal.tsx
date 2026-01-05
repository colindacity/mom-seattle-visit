'use client';

import { Activity } from '@/types/trip';
import {
  X,
  Clock,
  MapPin,
  DollarSign,
  ExternalLink,
  Calendar,
  Star,
  Ticket,
  Info,
  Music,
  Palette,
  TreePine,
  Camera,
  Tag,
} from 'lucide-react';
import { useEffect } from 'react';

interface ActivityDetailModalProps {
  activity: Activity;
  onClose: () => void;
}

const categoryConfig: Record<string, { icon: typeof Music; color: string; bgColor: string }> = {
  opera: { icon: Music, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  symphony: { icon: Music, color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
  art: { icon: Palette, color: 'text-pink-600', bgColor: 'bg-pink-100' },
  nature: { icon: TreePine, color: 'text-green-600', bgColor: 'bg-green-100' },
  sightseeing: { icon: Camera, color: 'text-amber-600', bgColor: 'bg-amber-100' },
};

export default function ActivityDetailModal({ activity, onClose }: ActivityDetailModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const config = categoryConfig[activity.category] || categoryConfig.sightseeing;
  const Icon = config.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image or color */}
        <div className={`${config.bgColor} p-6 relative`}>
          {activity.image && (
            <div className="absolute inset-0">
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
            </div>
          )}

          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 hover:bg-white/30 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg bg-white/70 ${config.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0 pr-8">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {activity.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{activity.venue}</p>
              </div>
            </div>

            {activity.priority === 'must-do' && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                Must Do
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Description */}
          <p className="text-gray-700 mb-6">{activity.description}</p>

          {/* Key details grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Date & Time */}
            {activity.date && (
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                  <p className="text-sm font-medium text-gray-800">{activity.date}</p>
                  {activity.time && (
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  )}
                </div>
              </div>
            )}

            {/* Duration */}
            {activity.duration && (
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-purple-500 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
                  <p className="text-sm font-medium text-gray-800">{activity.duration}</p>
                </div>
              </div>
            )}

            {/* Price */}
            <div className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 text-emerald-500 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Price</p>
                {activity.price === 0 ? (
                  <p className="text-sm font-medium text-emerald-600">FREE</p>
                ) : activity.seniorPrice ? (
                  <div>
                    <p className="text-sm">
                      <span className="line-through text-gray-400">${activity.price}</span>
                      <span className="font-medium text-emerald-600 ml-1">${activity.seniorPrice}</span>
                    </p>
                    <p className="text-xs text-emerald-600">(Senior price)</p>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-gray-800">${activity.price}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                <p className="text-sm font-medium text-gray-800 capitalize">{activity.city}</p>
              </div>
            </div>
          </div>

          {/* Address */}
          {activity.address && (
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-gray-700">{activity.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(activity.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline mt-1 inline-flex items-center gap-1"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Senior Discount */}
          {activity.seniorDiscount && (
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mb-4">
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-amber-700 uppercase tracking-wide">Senior Discount</p>
                  <p className="text-sm text-amber-800 mt-1">{activity.seniorDiscount}</p>
                </div>
              </div>
            </div>
          )}

          {/* Notes */}
          {activity.notes && activity.notes.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                Notes
              </h4>
              <ul className="space-y-1">
                {activity.notes.map((note, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {activity.tags && activity.tags.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                <Tag className="w-3.5 h-3.5" />
                Tags
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activity.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Booking Button */}
          {activity.bookingUrl && (
            <a
              href={activity.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              <Ticket className="w-5 h-5" />
              {activity.bookingRequired ? 'Book Tickets' : 'View Details & Book'}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {!activity.bookingUrl && activity.bookingRequired && (
            <div className="text-center text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
              Booking required - check venue website for tickets
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
