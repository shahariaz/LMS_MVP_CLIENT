const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  coursesEnrolled: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      currentUnit: {
        type: string,
      },
      currentLesson: { type: string },
    },
  ],
  performance: [{ type: mongoose.Schema.Types.ObjectId, ref: "Performance" }],
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Parent" },
  // Add other relevant fields
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
