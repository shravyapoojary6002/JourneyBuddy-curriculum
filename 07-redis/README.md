# Module 2.7 — Redis In-Memory Data Store

## What this does
A simple cache-aside example: checks Redis for a cached value first, and only falls back to a database if the value isn't cached yet.

## The flow
1. Check Redis for the key `username` (`client.get`)
2. **Cache miss**: if not found, simulate fetching it from a database, then save it into Redis with a 30-second expiry (`client.set(key, value, { EX: 30 })`)
3. **Cache hit**: if found, return the cached value directly — skipping the "database" step entirely

## Result observed
- First run: `Not in cache, getting from database...` → value saved to cache
- Second run (within 30 seconds): `Found in cache: Jane Doe` — returned instantly from Redis
- After 30 seconds, the key expires automatically and the next run would be a miss again

## How to run
- install:
npm install
- node cache.js

Requires a `.env` file with `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`
(not committed to Git).

## Reference documentation
https://redis.io/docs/