# 2.1 Next.js Frontend Architecture

## Core Principle
Next.js splits components into server components (render once on the server) and client components (marked with
"use client")

## What I built
- app/dashboard/page.jsx — a server component, fetches summary data and renders it as static HTML
- app/components/SearchBar.jsx — a client component using useState to track live input as the user types

## Why the split
DashboardPage doesn't need interactivity, so it stays a server component and costs nothing extra to load. SearchBar needs to react to typing, which only works in the browser, so it opts in with "use client".

## What I learnt
- Basics of next.js
- React components
- App router
- JSX

## Features
- Displays total users and total orders
- Live input is displayed

## How to run
- Install required dependencies:
npm install
- Start development server:
npm run dev
- Open browser and go to https://localhost:3000
- To open dashboard go to
https://localhost:3000/dashboard

## Not yet implemented
   - Live status card (useEffect + polling an API route) — planned as a
     follow-up extension to this module.

## Reference
https://nextjs.org/docs