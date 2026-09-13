// import the tools we need
const express = require("express");
const cors = require("cors");

// newer way of importing firebase-admin pieces
const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

// this is the secret key file you downloaded from firebase
const serviceAccount = require("./serviceAccountKey.json");

// connect this server to our firebase project
const firebaseApp = initializeApp({
  credential: cert(serviceAccount),
});

const app = express();
app.use(cors()); // allows our html file to talk to this server

// this route is "protected" - only people with a valid token can access it
app.get("/protected", function (req, res) {
  // get the token the client sent us
  var authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "No token given" });
    return;
  }

  // the token looks like "Bearer abc123...", we just want the "abc123" part
  var token = authHeader.split(" ")[1];

  // ask firebase: "is this token real and not expired?"
  getAuth(firebaseApp).verifyIdToken(token)
    .then(function (decodedToken) {
      // token is valid! send back the user's info
      res.json({
        message: "You are allowed in!",
        userId: decodedToken.uid,
        email: decodedToken.email,
      });
    })
    .catch(function (error) {
      // token was fake or expired
      res.status(401).json({ error: "Invalid token" });
    });
});

app.listen(4000, function () {
  console.log("Server is running on http://localhost:4000");
});