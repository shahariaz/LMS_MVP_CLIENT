let data = [
  {
    _id: "1",
    lesson: {
      _id: "lesson1",
      title: "Algebra Basics",
    },
    student: {
      _id: "student1",
      name: "John Doe",
    },
    status: "pending",
    reasonForDenial: "ok",
    picture:
      "https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    _id: "2",
    lesson: {
      _id: "lesson2",
      title: "Newton's Laws",
    },
    student: {
      _id: "student2",
      name: "Jane Smith",
    },
    status: "approved",
    reasonForDenial: null,
    picture:
      "https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    _id: "3",
    lesson: {
      _id: "lesson2",
      title: "Newton's Laws",
    },
    student: {
      _id: "student2",
      name: "Jane Smith",
    },
    status: "approved",
    reasonForDenial: null,
    picture:
      "https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
exports.test = async (req, res) => {
  data = [
    {
      _id: "1",
      lesson: {
        _id: "lesson1",
        title: "Algebra Basics",
      },
      student: {
        _id: "student1",
        name: "John Doe",
      },
      status: "pending",
      reasonForDenial: null,
      picture:
        "https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      _id: "2",
      lesson: {
        _id: "lesson2",
        title: "Newton's Laws",
      },
      student: {
        _id: "student2",
        name: "Jane Smith",
      },
      status: "approved",
      reasonForDenial: null,
      picture:
        "https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      _id: "3",
      lesson: {
        _id: "lesson2",
        title: "Newton's Laws",
      },
      student: {
        _id: "student2",
        name: "Jane Smith",
      },
      status: "approved",
      reasonForDenial: null,
      picture:
        "https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  res.status(200).json(data);
};
exports.updateStatusAndDenialReason = async (req, res) => {
  const { status, reasonForDenial } = req.body;
  const { homeworkId } = req.params;
  // Find the homework entry by ID in your data array
  const homeworkEntry = await data.find((entry) => entry._id === homeworkId);
  console.log(homeworkId);
  if (!homeworkEntry) {
    return res.status(404).json({ error: "Homework not found" });
  }
  console.log(homeworkEntry.status);
  // Update the status and reasonForDenial
  homeworkEntry.status = status;
  homeworkEntry.reasonForDenial = reasonForDenial;

  res.status(200).json({ message: "Update successful", data: homeworkEntry });
};
