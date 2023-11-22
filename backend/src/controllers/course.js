const Course = require("../models/course");
exports.getAllCouse = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      status: "ok",
      data: courses,
    });
  } catch (error) {
    res.status(404).json({
      status: "Not Found",
    });
  }
};
exports.showAllLessons = async (req, res) => {
  try {
    // Retrieve all courses
    const courses = await Course.find();

    // Extract lessons from all courses
    const allLessons = courses.reduce((lessons, course) => {
      // Extract lessons from each unit in each course
      const courseLessons = course.units.reduce((unitLessons, unit) => {
        // Extract lessons from each lesson in each unit
        const lessonsFromUnit = unit.lessons.map((lesson) => ({
          courseId: course._id,
          unitId: unit._id,
          lessonId: lesson._id,
          title: lesson.title,
          videoURL: lesson.videoURL,
        }));

        return unitLessons.concat(lessonsFromUnit);
      }, []);

      return lessons.concat(courseLessons);
    }, []);

    res.json(allLessons);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
// Controller for showing all homework across all courses
exports.showAllHomework = async (req, res) => {
  try {
    // Fetch all courses from MongoDB
    const courses = await Course.find();

    // Extract homework details from the fetched courses
    const allHomework = courses.map((course) => {
      return {
        courseId: course._id,
        courseTitle: course.title,
        homework: course.units.flatMap((unit) =>
          unit.lessons.flatMap((lesson) =>
            lesson.homework
              ? {
                  lessonId: lesson._id,
                  lessonTitle: lesson.title,
                  homeworkId: lesson.homework._id,
                  homeworkTitle: lesson.homework.title,
                  dueDate: lesson.homework.dueDate,
                  status: lesson.homework.status,
                  submissions: lesson.homework.submissions || [],
                }
              : []
          )
        ),
      };
    });

    res.json({ status: "ok", data: allHomework });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};
// Controller for showing all submissions from all courses
exports.showAllSubmissions = async (req, res) => {
  try {
    // Fetch all courses from MongoDB
    const courses = await Course.find();

    // Extract submission details from the fetched courses
    const allSubmissions = courses
      .map((course) => {
        return course.units.flatMap((unit) =>
          unit.lessons.flatMap((lesson) =>
            lesson.homework
              ? lesson.homework.submissions.map((submission) => ({
                  courseId: course._id,
                  courseTitle: course.title,
                  lessonId: lesson._id,
                  lessonTitle: lesson.title,
                  homeworkId: lesson.homework._id,
                  homeworkTitle: lesson.homework.title,
                  submissionId: submission._id,
                  screenshotURL: submission.screenshotURL,
                  status: submission.status,
                  denialReason: submission.denialReason,
                }))
              : []
          )
        );
      })
      .flat();

    res.json({ status: "ok", data: allSubmissions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};
