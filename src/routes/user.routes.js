const express = require("express");
const { registerUser } = require("../controllers/user.controller.js");
const { upload } = require("../middleware/multer.middleware.js");

const router = express.Router();

// http://localhost:8000/users/register
router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

module.exports = { userRouter: router };
