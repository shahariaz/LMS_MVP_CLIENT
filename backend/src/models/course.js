const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  screenshotURL: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "denied"],
    default: "pending",
  },
  denialReason: { type: String, default: "" },
});

const homeworkSchema = new mongoose.Schema({
  dueDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "approved", "denied"],
    default: "pending",
  },
  submissions: [submissionSchema],
});

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoURL: { type: String, required: true },
  homework: homeworkSchema,
});

const unitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  units: [unitSchema],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
