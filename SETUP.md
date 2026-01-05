# Seattle Trip Planner - Setup Guide

## Live URL
**https://mom-seattle-visit.vercel.app**

## GitHub Repository
**https://github.com/colindacity/mom-seattle-visit**

---

## Setting Up Vercel KV Database (Required)

The app needs a Vercel KV (Redis) database to store and share the schedule between users.

### Steps:

1. **Open Vercel Dashboard**
   - Go to: https://vercel.com/colindacitys-projects/mom-seattle-visit/stores
   - Or click the link that just opened in your browser

2. **Create KV Database**
   - Click "Create Database"
   - Select "KV" (Redis-based key-value store)
   - Choose a name (e.g., "mom-seattle-trip-db")
   - Select the region closest to you (e.g., US West)
   - Click "Create"

3. **Connect to Project**
   - After creation, Vercel will show you connection options
   - Click "Connect Project"
   - Select "mom-seattle-visit"
   - Vercel will automatically add the environment variables

4. **Redeploy**
   - The environment variables are now set
   - Vercel should automatically redeploy
   - If not, go to: https://vercel.com/colindacitys-projects/mom-seattle-visit
   - Click "Redeploy" on the latest deployment

5. **Test the App**
   - Visit: https://mom-seattle-visit.vercel.app
   - Drag some activities to the calendar
   - Open in another browser/device
   - The schedule should sync automatically!

---

## Features

### Shared Schedule
- Schedule is stored in Vercel KV (Redis database)
- Changes sync across all users in real-time
- Both you and your mom can move activities around

### Custom Events
- Click "Add Event" button to create custom activities
- Add restaurants, meetings, or any special plans
- Custom events appear in the activity pool
- Drag them to any day like built-in activities

### Drag & Drop
- Drag activities from the pool to any day
- Rearrange activities within a day
- Drag back to pool to unschedule

### Filters
- Filter by category: Opera, Symphony, Art, Nature, Sightseeing
- Filter by city: Seattle, Portland, Tacoma
- Click category badges to filter

### Interactive Map
- Click "Map" button to see all activities on a map
- Color-coded by category
- Filter by city
- Click markers for details

---

## Sharing with Your Mom

1. Send her the URL: **https://mom-seattle-visit.vercel.app**
2. She can:
   - View the entire itinerary
   - Drag activities to reschedule
   - Add custom events
   - All changes sync automatically!

No login required - anyone with the URL can use it.

---

## Development

Local development:
```bash
npm run dev -- --port 4013
```

Build:
```bash
npm run build
```

Deploy:
```bash
vercel --prod
```

---

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Drag & Drop**: @dnd-kit/core
- **Database**: Vercel KV (Redis)
- **Maps**: Leaflet + React-Leaflet
- **Hosting**: Vercel
