'use client';

import { useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Activity } from '@/types/trip';
import { ExternalLink, MapPin, Clock, DollarSign, Star } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Location coordinates for cities
const cityCoordinates: Record<string, [number, number]> = {
  seattle: [47.6062, -122.3321],
  portland: [45.5152, -122.6784],
  tacoma: [47.2529, -122.4443],
  olympia: [47.0379, -122.9007],
};

// Activity venue coordinates (approximate)
const venueCoordinates: Record<string, [number, number]> = {
  // Seattle venues
  'McCaw Hall': [47.6246, -122.3512],
  'Benaroya Hall': [47.6090, -122.3386],
  'Seattle Art Museum': [47.6074, -122.3387],
  'Seattle Asian Art Museum': [47.6305, -122.3145],
  'Chihuly Garden and Glass': [47.6206, -122.3505],
  'Frye Art Museum': [47.6083, -122.3239],
  'Henry Art Gallery': [47.6567, -122.3109],
  'Museum of Pop Culture (MoPOP)': [47.6215, -122.3481],
  'Kubota Garden': [47.5127, -122.2695],
  'Woodland Park Zoo': [47.6686, -122.3536],
  'Volunteer Park': [47.6305, -122.3145],
  'Pike Place Market': [47.6097, -122.3422],
  'Space Needle': [47.6205, -122.3493],
  'Washington Park Arboretum': [47.6392, -122.2970],
  'Seattle Japanese Garden': [47.6367, -122.2970],
  'National Nordic Museum': [47.6724, -122.3835],
  'Wing Luke Museum': [47.5988, -122.3227],
  'Town Hall Seattle': [47.6075, -122.3321],
  // Portland venues
  'Portland Art Museum': [45.5159, -122.6836],
  'Portland Japanese Garden': [45.5190, -122.7082],
  "Powell's City of Books": [45.5230, -122.6818],
  'Oregon Convention Center': [45.5285, -122.6620],
  'Lan Su Chinese Garden': [45.5256, -122.6729],
  'Pittock Mansion': [45.5254, -122.7164],
  'Arlene Schnitzer Concert Hall': [45.5176, -122.6832],
  'Kimpton Riverplace Hotel': [45.5060, -122.6720],
  // Nature
  'Multnomah Falls': [45.5762, -122.1158],
  'Latourell Falls': [45.5363, -122.2177],
  // Tacoma
  'Museum of Glass': [47.2455, -122.4308],
  // Olympia
  'Washington State Capitol': [47.0354, -122.9062],
};

// Custom marker icon
const createMarkerIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Category colors
const categoryColors: Record<string, string> = {
  opera: '#9333ea',      // purple
  symphony: '#4f46e5',   // indigo
  art: '#ec4899',        // pink
  nature: '#22c55e',     // green
  sightseeing: '#f59e0b', // amber
  food: '#ef4444',       // red
  travel: '#3b82f6',     // blue
};

interface TripMapProps {
  activities: Activity[];
  onActivityClick?: (activity: Activity) => void;
}

// Component to set map view
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function TripMap({ activities, onActivityClick }: TripMapProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Get unique locations from activities
  const markers = useMemo(() => {
    const seen = new Set<string>();
    return activities
      .map(activity => {
        const coords = venueCoordinates[activity.venue] || cityCoordinates[activity.city];
        if (!coords) return null;

        // Avoid duplicate markers for same venue
        const key = `${coords[0]},${coords[1]}`;
        if (seen.has(key)) return null;
        seen.add(key);

        return {
          activity,
          coords,
          color: categoryColors[activity.category] || '#6b7280',
        };
      })
      .filter(Boolean) as { activity: Activity; coords: [number, number]; color: string }[];
  }, [activities]);

  // Route between cities (Seattle -> Portland)
  const routeCoords: [number, number][] = [
    cityCoordinates.seattle,
    cityCoordinates.tacoma,
    cityCoordinates.olympia,
    cityCoordinates.portland,
  ];

  // Calculate center based on all markers
  const center: [number, number] = useMemo(() => {
    if (selectedCity && cityCoordinates[selectedCity]) {
      return cityCoordinates[selectedCity];
    }
    // Default to center between Seattle and Portland
    return [46.5607, -122.5];
  }, [selectedCity]);

  const zoom = selectedCity ? 12 : 8;

  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden shadow-lg">
      {/* City filter buttons */}
      <div className="absolute top-3 left-3 z-[1000] flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCity(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium shadow-md transition-all ${
            !selectedCity
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          All
        </button>
        {Object.keys(cityCoordinates).map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(selectedCity === city ? null : city)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium shadow-md transition-all capitalize ${
              selectedCity === city
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <MapController center={center} zoom={zoom} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Route polyline */}
        <Polyline
          positions={routeCoords}
          color="#3b82f6"
          weight={3}
          opacity={0.6}
          dashArray="10,10"
        />

        {/* Activity markers */}
        {markers.map(({ activity, coords, color }) => (
          <Marker
            key={activity.id}
            position={coords}
            icon={createMarkerIcon(color)}
          >
            <Popup className="custom-popup" maxWidth={280}>
              <div className="p-2">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {activity.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2">{activity.venue}</p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
                  {activity.time && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </span>
                  )}
                  {activity.price !== undefined && (
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {activity.price === 0 ? 'Free' : `$${activity.seniorPrice || activity.price}`}
                    </span>
                  )}
                  {activity.priority === 'must-do' && (
                    <span className="flex items-center gap-1 text-amber-600">
                      <Star className="w-3 h-3 fill-amber-500" />
                      Must Do
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {onActivityClick && (
                    <button
                      onClick={() => onActivityClick(activity)}
                      className="flex-1 text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
                    >
                      View Details
                    </button>
                  )}
                  {activity.bookingUrl && (
                    <a
                      href={activity.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-blue-600 hover:underline px-2 py-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Book
                    </a>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* City markers */}
        {Object.entries(cityCoordinates).map(([city, coords]) => (
          <Marker
            key={`city-${city}`}
            position={coords}
            icon={L.divIcon({
              className: 'city-marker',
              html: `<div style="
                background: #1f2937;
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 11px;
                font-weight: 600;
                white-space: nowrap;
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              ">${city.charAt(0).toUpperCase() + city.slice(1)}</div>`,
              iconSize: [60, 20],
              iconAnchor: [30, 10],
            })}
          />
        ))}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-3 right-3 z-[1000] bg-white rounded-lg shadow-md p-2">
        <div className="text-xs font-medium text-gray-700 mb-1">Categories</div>
        <div className="grid grid-cols-2 gap-1">
          {Object.entries(categoryColors).slice(0, 5).map(([category, color]) => (
            <div key={category} className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: color }}
              />
              <span className="text-[10px] text-gray-600 capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
