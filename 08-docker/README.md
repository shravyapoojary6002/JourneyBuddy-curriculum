# Module 2.8 — Docker Containerization

## What this does
A minimal Express server packaged into a Docker container using a multi-stage-style Dockerfile

## What's in the Dockerfile
- `FROM node:18-alpine` — picks a small starting point that already has Node.js
- `WORKDIR /app` — creates a folder inside the container for our app
- `COPY package.json .` and `RUN npm install` — installs the packages our app needs
- `COPY . .` — copies the rest of our code into the container
- `EXPOSE 3000` — says which port the app uses
- `CMD ["node", "server.js"]` — starts the app when the container runs


## How to run it
- docker build -t my-simple-app .
- docker run -p 3000:3000 my-simple-app
- Then visit http://localhost:3000

## Reference documentation
https://docs.docker.com/