const express = require("express");
const app = express();

app.use(express.json());

// ---- MIDDLEWARE ---
// It always has 3 things: (req, res, next)
//   req  = the incoming request
//   res  = the response you'll eventually send
//   next = to pass control to the next step

function logger(req, res, next) {
  // 1. Capture the entry timestamp
  const timestamp = new Date().toISOString();

  // 2. Inspect a header 
  const userAgent = req.headers["user-agent"];

  // 3. Write a simple "telemetry" line 
  console.log(`[${timestamp}] ${req.method} ${req.url} - from: ${userAgent}`);

  // 4. Forward control down the chain 
  next();
}

// Register the middleware
app.use(logger);

// ---- ROUTE HANDLER ----
app.get("/", (req, res) => {
  res.send("Hello! The middleware already logged this request.");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});