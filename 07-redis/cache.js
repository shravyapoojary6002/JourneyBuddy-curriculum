// load the secret password/host from .env file
require("dotenv").config();

// import redis
const redis = require("redis");

// connect to redis
var client = redis.createClient({
  username: "default",
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

async function main() {
  await client.connect();
  console.log("Connected to Redis!");


  var key = "username";
  var value = await client.get(key);

  if (value) {
    console.log("Found in cache:", value);
  } 
  else 
    {
    console.log("Not in cache, getting from database...");
    value = "Jane Doe"

    await client.set(key, value, { EX: 30 });
    console.log("Saved to cache:", value);
  }

  client.quit();
}

main();