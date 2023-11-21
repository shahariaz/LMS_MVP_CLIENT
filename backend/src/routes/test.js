const express = require("express");
const router = express.Router();

// Import your controller/handlers
const { test, updateStatusAndDenialReason } = require("../controllers/test"); // Replace with the actual path to your controller

// Define your routes
router.get("/test", test);

// Update the route to include the homeworkId as a parameter
router.post("/homework/:homeworkId", updateStatusAndDenialReason);

module.exports = router;
