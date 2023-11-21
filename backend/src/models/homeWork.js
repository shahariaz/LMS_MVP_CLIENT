const mongoose = require("mongoose");

const homeworkSubmissionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  reasonForDenial: {
    type: String,
  },
  unit: { type: mongoose.Schema.Types.ObjectId, ref: "Unit", required: true },
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true,
  },
  image: { type: String, required: true }, // Store the path or URL to the uploaded image
  isApproved: { type: Boolean, default: false },

  approvalDate: { type: Date }, // Date when the homework was approved
  // Add other relevant fields
});

const HomeworkSubmission = mongoose.model(
  "HomeworkSubmission",
  homeworkSubmissionSchema
);

module.exports = HomeworkSubmission;
