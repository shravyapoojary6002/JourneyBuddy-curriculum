# Module 2.2 — Node.js & Middleware Architecture

## What this does
A basic Express server with one middleware function (`logger`) that runs before every request reaches its route handler.

## How the pipeline works
1. **Capture entry timestamp** — `new Date().toISOString()` records when the request arrived.
2. **Inspect header parameters** — reads `req.headers["user-agent"]` to see what client made the request.
3. **Write telemetry** — logs a line to the console with the timestamp,method, URL, and user-agent.
4. **Forward control** — calls `next()` to pass the request down to the actual route handler (`app.get("/", ...)`). Without `next()`, the request would hang forever.

## How to run it
run
- npm install
- node server.js

Then visit http://localhost:3000 and check the terminal for the logged line.

## Reference documentation
https://nodejs.org/en/docs/