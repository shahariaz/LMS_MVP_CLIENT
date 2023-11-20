const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "teacher" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Use a secure password hashing library
  approvedHomeworkHistory: [
    { type: mongoose.Schema.Types.ObjectId, ref: "HomeworkSubmission" },
  ],
  // Add a reference to courses
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  // Add other relevant fields
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
