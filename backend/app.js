const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const adminRoutes = require("./src/routes/admin");
const loginRoutes = require("./src/routes/login");
const ErrorHandler = require("./src/utils/ErrorHandler");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//user routes
app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1", loginRoutes);
app.all("*", (req, res, next) => {
  //   next(new AppError(`Can't find ${req.originalUrl} on this server!!!`, 404));
});
//Error handlers
app.use(ErrorHandler);
module.exports = app;
