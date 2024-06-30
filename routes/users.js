const express = require("express");
const {
  loginUser,
  registerUser,
  userDashboard,
} = require("../controllers/auth");
const { registeringUser } = require("../controllers/authUser");
const router = express.Router();
// @get Pages
router.get("/Login", loginUser);
router.get("/Register", registerUser);
router.get("/Dashboard", userDashboard);

//@post Pages

router.post("/Register", registeringUser);
module.exports = router;
