# mom-seattle-visit - Claude Code Instructions

## Dev Server Port

**Assigned Port: 4013**

This project's dev server runs on port 4013. Always use this port to avoid conflicts with other projects.

```bash
# Start dev server on assigned port
PORT=4013 npm run dev
# Or
npm run dev -- --port 4013
```

## Product Roadmap

See [ROADMAP.md](./ROADMAP.md) for the full product roadmap, upcoming features, and technical improvements.

## Project Structure

- `/src/app` - Next.js 16 App Router pages and API routes
- `/src/components` - React components for UI
- `/src/data` - Trip data and activities
- `/src/types` - TypeScript type definitions
- `/src/lib` - Utility functions and Redis client

## Key Technologies

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Database**: Redis Cloud (via Vercel marketplace)
- **Drag & Drop**: @dnd-kit/core
- **Maps**: Leaflet + React-Leaflet
- **Deployment**: Vercel

## Important Notes

- Redis connection uses `ioredis` with `REDIS_URL` from Vercel marketplace (Redis Cloud, not Upstash)
- Schedule and custom events are persisted in Redis
- Multi-user real-time sync with 500ms debouncing
- No authentication required - anyone with URL can access
