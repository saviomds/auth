const express = require("express");
const { welcomeUser } = require("../controllers/auth");
const welcome = express.Router();
const path = require("path");
// Serve static files from the "public" directory
welcome.use(express.static(path.join(__dirname, "public")));

welcome.get("/", welcomeUser);

module.exports = welcome;
