const express = require("express");
const { registerUser } = require("../controllers/user.controller.js");

const router = express.Router();

// http://localhost:8000/users/register
router.post("/register", registerUser);

module.exports = { userRouter: router };
