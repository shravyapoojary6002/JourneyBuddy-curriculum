# Module 2.8 — Docker Containerization

## What this does
A minimal Express server packaged into a Docker container using a multi-stage-style Dockerfile

## Dockerfile breakdown
| Instruction | Purpose |
|---|---|
| `FROM node:18-alpine` | minimal base OS with Node.js pre-installed |
| `WORKDIR /app` | sets the working folder inside the container |
| `COPY package.json .` + `RUN npm install` | installs dependencies inside the container (not copied from host) |
| `COPY . .` | transfers the rest of the app's build artifacts |
| `EXPOSE 3000` | documents which port the app listens on |
| `CMD ["node", "server.js"]` | the command that runs when the container boots |


## How to run it
- docker build -t my-simple-app .
- docker run -p 3000:3000 my-simple-app
- Then visit http://localhost:3000

## Reference documentation
https://docs.docker.com/