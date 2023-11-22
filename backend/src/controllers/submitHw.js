const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const Course = require("../models/course");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the directory where you want to store uploaded images
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

// Controller for updating submission data with image upload
(exports.updateSubmissionWithImage = upload.single("image")),
  async (req, res) => {
    try {
      const { submissionId } = req.params;
      const { status } = req.body;

      // Check if a file was uploaded
      if (req.file) {
        // Get the file path
        const imagePath = req.file.path;

        // Update submission with image URL and set status to pending
        const updatedCourse = await Course.findOneAndUpdate(
          { "units.lessons.homework.submissions._id": submissionId },
          {
            $set: {
              "units.lessons.homework.submissions.$.screenshotURL": imagePath,
              "units.lessons.homework.submissions.$.status": "pending",
            },
          },
          { new: true }
        );

        // Delete the temporary file
        await fs.unlink(imagePath);

        res.json({ status: "ok", data: updatedCourse });
      } else {
        // If no file was uploaded, update only the status
        const updatedCourse = await Course.findOneAndUpdate(
          { "units.lessons.homework.submissions._id": submissionId },
          {
            $set: {
              "units.lessons.homework.submissions.$.status": status,
            },
          },
          { new: true }
        );

        res.json({ status: "ok", data: updatedCourse });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error.message });
    }
  };
