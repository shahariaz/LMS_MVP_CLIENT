const express = require("express");
const adminController = require("../controllers/admin.controller");

const router = express.Router();

// Define routes for creating accounts
router.post("/create-parent-account", adminController.createParentAccount);
router.post("/create-student-account", adminController.createStudentAccount);
router.post("/create-teacher-account", adminController.createTeacherAccount);
router.get("/test", adminController.test);
console.log("hello i am form adminController");
router.post("/create-course", adminController.createCourse);

module.exports = router;
