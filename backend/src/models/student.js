const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coursesEnrolled: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      currentUnit: { type: mongoose.Schema.Types.ObjectId, ref: "Unit" },
      currentLesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
    },
  ],
  performance: [{ type: mongoose.Schema.Types.ObjectId, ref: "Performance" }],
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Parent" },
  // Add other relevant fields
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
