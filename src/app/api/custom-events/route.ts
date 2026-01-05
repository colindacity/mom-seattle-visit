import redis from '@/lib/redis';
import { NextResponse } from 'next/server';
import type { Activity } from '@/types/trip';

const CUSTOM_EVENTS_KEY = 'seattle-trip-custom-events';

// GET - Load custom events
export async function GET() {
  try {
    const events = await redis.get<Activity[]>(CUSTOM_EVENTS_KEY);
    return NextResponse.json({ events: events || [] });
  } catch (error) {
    console.error('Error loading custom events:', error);
    return NextResponse.json(
      { error: 'Failed to load custom events' },
      { status: 500 }
    );
  }
}

// POST - Add a new custom event
export async function POST(request: Request) {
  try {
    const event: Activity = await request.json();

    // Get existing events
    const events = await redis.get<Activity[]>(CUSTOM_EVENTS_KEY) || [];

    // Add new event
    const updatedEvents = [...events, event];
    await redis.set(CUSTOM_EVENTS_KEY, updatedEvents);

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error('Error adding custom event:', error);
    return NextResponse.json(
      { error: 'Failed to add custom event' },
      { status: 500 }
    );
  }
}

// DELETE - Remove a custom event
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    // Get existing events
    const events = await redis.get<Activity[]>(CUSTOM_EVENTS_KEY) || [];

    // Remove event
    const updatedEvents = events.filter(e => e.id !== id);
    await redis.set(CUSTOM_EVENTS_KEY, updatedEvents);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting custom event:', error);
    return NextResponse.json(
      { error: 'Failed to delete custom event' },
      { status: 500 }
    );
  }
}
