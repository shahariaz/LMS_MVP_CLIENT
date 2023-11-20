const catchAsync = require("../utils/catchAsync");
const Teacher = require("../models/teacher.model");
exports.loginHandeler = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Teacher.findOne({ email: email });
  res.status(200).json({
    status: "success",
    data: user,
  });
});
