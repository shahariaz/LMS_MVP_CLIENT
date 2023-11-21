const { Schema, model } = require("mongoose");

const linkSchema = Schema({
  title: String,
  url: String,
});

const courseDataSchema = Schema({
  videoUrl: String,
  videoThumbnail: String,
  title: String,
  videoSections: String,
  description: String,
  videoLength: String,
  links: [linkSchema],
});

const courseSchema = Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher" }],
  units: [{ type: Schema.Types.ObjectId, ref: "Unit" }],
  thumbnail: {
    public_id: String,
    url: String,
  },
  demoUrl: String,
  courseData: [courseDataSchema],
});

const Course = model("Course", courseSchema);

module.exports = Course;
