const express = require("express");
const adminController = require("../controllers/admin.controller");
const course = require("../controllers/course");
const router = express.Router();

// Define routes for creating accounts
router.post("/create-parent-account", adminController.createParentAccount);
router.post("/create-student-account", adminController.createStudentAccount);
router.post("/create-teacher-account", adminController.createTeacherAccount);
router.get("/getall", course.getAllCouse);
router.get("/allhw", course.showAllHomework);
router.get("/allsub", course.showAllSubmissions);
router.get("/test", adminController.test);
router.post("/course", adminController.createCourse);
router.get("/lesson", course.showAllLessons);

module.exports = router;
