const Homework = require("../models/homework");

const teacherController = {
  // Get a list of pending homework
  getPendingHomework: async (req, res) => {
    try {
      const pendingHomework = await Homework.find({
        status: "pending",
      }).populate("lesson student");
      res.json(pendingHomework);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Approve homework
  approveHomework: async (req, res) => {
    const { homeworkId } = req.params;

    try {
      const updatedHomework = await Homework.findByIdAndUpdate(
        homeworkId,
        { status: "approved", reasonForDenial: undefined },
        { new: true }
      );
      res.json(updatedHomework);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Deny homework with a reason
  denyHomework: async (req, res) => {
    const { homeworkId } = req.params;
    const { reason } = req.body;

    try {
      const updatedHomework = await Homework.findByIdAndUpdate(
        homeworkId,
        { status: "denied", reasonForDenial: reason },
        { new: true }
      );
      res.json(updatedHomework);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = teacherController;
