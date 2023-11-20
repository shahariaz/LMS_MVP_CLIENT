// routes/authRoutes.js

const express = require("express");
const login = require("../controllers/login");
const router = express.Router();
// Define the login route
router.post("/login", login.loginHandeler);

module.exports = router;
