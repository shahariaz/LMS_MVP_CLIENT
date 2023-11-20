const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Use a secure password hashing library
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
