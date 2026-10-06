# Module 2.7 — Redis In-Memory Data Store

## What this does
Checks if some data is already saved in Redis. If yes, use that. If no,pretend to get it from a database and save it in Redis for next time.

## The steps
1. Check Redis for a saved value
2. If not found, get it from the "database" and save it in Redis
3. The saved value disappears after 30 seconds

## What happened when we ran it
- First time: it wasn't in Redis yet, so it got it from the "database" and saved it
- Second time (within 30 seconds): it was already in Redis, so it returned instantly
- After 30 seconds, it would go back to step 1 since the saved value expires

## How to run
- install:
npm install
- node cache.js

Requires a `.env` file with `REDIS_HOST`, `REDIS_PORT`, `REDIS_PASSWORD`(not committed to Git).

## Reference documentation
https://redis.io/docs/