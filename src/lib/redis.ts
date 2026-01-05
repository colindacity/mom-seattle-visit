import { Redis } from "@upstash/redis";

// Upstash Redis client that automatically reads environment variables
// set by Vercel marketplace integration
const redis = Redis.fromEnv();

export default redis;
