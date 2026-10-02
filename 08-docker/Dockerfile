# step 1: pick a minimal base image with Node.js already installed
FROM node:18-alpine

# step 2: set the folder inside the container where our app will live
WORKDIR /app

# step 3: copy just package.json first
COPY package.json .

# step 4: install dependencies inside the container
RUN npm install

# step 5: copy the rest of our code into the container
COPY . .

# step 6: tell Docker which port our app listens on
EXPOSE 3000

# step 7: the command that runs when the container starts
CMD ["node", "server.js"]