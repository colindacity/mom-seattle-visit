export interface Activity {
  id: string;
  name: string;
  venue: string;
  address: string;
  description: string;
  category: 'opera' | 'symphony' | 'art' | 'nature' | 'food' | 'sightseeing' | 'travel' | 'accommodation';
  city: 'seattle' | 'portland' | 'tacoma' | 'olympia' | 'en-route';
  date?: string; // Specific date if event-based
  time?: string;
  duration: string;
  price?: number;
  seniorPrice?: number;
  seniorDiscount?: string;
  bookingUrl?: string;
  bookingRequired: boolean;
  image?: string;
  notes?: string[];
  tags?: string[];
  priority?: 'must-do' | 'should-do' | 'nice-to-have';
}

export interface ScheduledItem {
  id: string;
  activityId: string;
  date: string;
  startTime?: string;
  endTime?: string;
  notes?: string;
}

export interface DayPlan {
  date: string;
  items: ScheduledItem[];
  notes?: string;
}

export interface Flight {
  id: string;
  type: 'arrival' | 'departure';
  flightNumber: string;
  from: string;
  to: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  confirmation: string;
  airline: string;
}

export interface Hotel {
  id: string;
  name: string;
  address: string;
  checkIn: string;
  checkOut: string;
  checkInTime: string;
  checkOutTime: string;
  confirmation?: string;
}

export interface Transportation {
  id: string;
  type: 'car' | 'train' | 'bus' | 'shuttle' | 'rideshare';
  from: string;
  to: string;
  date?: string;
  departureTime?: string;
  estimatedDuration: string;
  distance?: string;
  notes?: string[];
  bookingUrl?: string;
}

export interface TripData {
  id: string;
  name: string;
  visitor: string;
  startDate: string;
  endDate: string;
  flights: Flight[];
  hotels: Hotel[];
  transportation?: Transportation[];
}
