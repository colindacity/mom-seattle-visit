import Redis from 'ioredis';

// Redis Cloud client using REDIS_URL from Vercel marketplace integration
const redis = new Redis(process.env.REDIS_URL!);

export default redis;
