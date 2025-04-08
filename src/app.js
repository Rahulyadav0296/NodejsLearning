const express = require("express");

const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const { userRouter } = require("./routes/user.routes.js");

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/users", userRouter);

module.exports = { app };
