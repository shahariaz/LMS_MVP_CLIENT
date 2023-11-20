const mongoose = require("mongoose");
const db = mongoose.connection;
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URL);
    console.log("mongodb connection established");
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error);
    process.exit(1);
  }
};
module.exports = connectDB;
