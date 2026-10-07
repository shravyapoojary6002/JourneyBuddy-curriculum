# Module 2.11 — Google ADK (Android Development Kit)

## What this shows
A diagram of what happens when someone taps a button in a mobile app to load data from a server.

## Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant UI as App Screen
    participant S as App State
    participant API as Server

    U->>UI: Taps a button
    UI->>S: Tells the app to start loading
    S->>UI: Shows a loading spinner
    S->>API: Asks the server for data
    API-->>S: Sends back the data
    S->>S: Saves the new data
    S->>UI: Screen updates to show the new data
```

## Steps explanation
1. User taps a button
2. The app shows a loading spinner right away
3. The app asks the server for data in the background, so the screen doesn't freeze
4. The server sends back the data
5. The app saves the new data
6. The screen updates automatically to show it

## Reference documentation
https://adk.dev/