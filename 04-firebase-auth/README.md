# Module 2.4 — Firebase & Firebase Authentication

## What this does
This project shows a simple login and singup system using Firebase Authentication.
It has:
- A login/signup page
- Firebase Authentication
- A backend server

## The flow
1. User signs up or logs in on the client using email/password
2. Firebase issues an ID token proving the user is authenticated
3. The client sends that token to the backend in the `Authorization` header.
4. The backend verifies the token with Firebase (`verifyIdToken`) before
   allowing access to the protected route.

## How to run it
- Start the server:
cd server

- Install requred packages:
npm install

- Start the server:
node server.js

Client: open `client/index.html` directly in a browser.

## Reference documentation
https://firebase.google.com/docs/auth