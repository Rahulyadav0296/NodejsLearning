require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo Database connected");
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/", (req, res) => {
  console.log("Hello Rahul");
});

app.get("/twitter", (req, res) => {
  res.send("rahulyadav0296");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at the webpage</h1>");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on the PORT of ${process.env.PORT}`);
});
