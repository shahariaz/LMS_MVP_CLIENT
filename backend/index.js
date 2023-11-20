require("dotenv").config({ path: "./src/config/.env" });
const app = require("./app");
const mongoose = require("mongoose");
const connectDB = require("./src/config/db");
//handleing Uncaught errors
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    `Shutting down the server for handling uncaught exception: ${err.stack}`
  );
});
const server = app.listen(process.env.PORT || 7000, () => {
  console.log("listening on port", process.env.PORT);
  connectDB();
});
//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(
    `Shutting down the server for unhandle promise rejection: ${err.stack}`
  );
  server.close(() => {
    process.exit(1);
  });
});
