# Module 2.2 — Node.js & Middleware Architecture

## What this does
A basic Express server with one middleware function (`logger`) that runs before every request reaches its route handler.

## How the middleware works
1. **Record the time**: saves when the request arrived.
2. **Read the user-agent**: checks which client (browser, Postman, etc.) sent the request.
3. **Log it**: prints the time, method, URL, and user-agent to the console.
4. **Call `next()`**: passes the request on to the route handler. Without it, the request hangs.

## How to run it
run
- npm install
- node server.js

Then visit http://localhost:3000 and check the terminal for the logged line.

## Reference documentation
https://nodejs.org/en/docs/