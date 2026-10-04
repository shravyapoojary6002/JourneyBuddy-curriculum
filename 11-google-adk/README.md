# Module 2.11 — Google ADK (Android Development Kit)

## What this shows
A simple diagram of what happens when a user taps a button in a mobile app to load data from a server.

## Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant UI as App Screen
    participant S as App State
    participant API as Server

    U->>UI: Taps "Refresh" button
    UI->>S: Tells app to start loading
    S->>UI: Shows loading spinner
    S->>API: Sends request for data
    API-->>S: Sends back the data
    S->>S: Updates with new data
    S->>UI: Screen updates to show new data
```

## Steps explained simply
1. User taps a button
2. The app shows a loading spinner right away
3. The app asks the server for data in the background (so the screen doesn't freeze)
4. When the server replies, the app saves the new data
5. The screen updates automatically to show it

## Reference documentation
https://adk.dev/