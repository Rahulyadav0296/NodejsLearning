require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Connected on the port", process.env.PORT);
});
