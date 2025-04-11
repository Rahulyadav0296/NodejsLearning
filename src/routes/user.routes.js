const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} = require("../controllers/user.controller.js");
const { upload } = require("../middleware/multer.middleware.js");
const verifyJWT = require("../middleware/auth.middleware.js");

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

router.post("/login", loginUser);

// Secured Routes
router.post("/logout", verifyJWT, logoutUser);
router.post("/refresh-token", refreshAccessToken);

module.exports = { userRouter: router };
