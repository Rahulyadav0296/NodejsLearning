const express = require("express");

const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // set the client url
    credentials: true,
  })
); // for middleware and configuration purpose

app.use(express.json({ limit: "16kb" })); // accept the json

// extra details in the url Rahul+yadav
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// for public assets
app.use(express.static("public"));

// for access the cookies from client and set to the client side
app.use(cookieParser());

module.exports = app;
