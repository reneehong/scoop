const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  preferredContact: { type: String, required: false, unique: false },
  college: { type: String, required: true, unique: false },
  password: { type: String, required: true, unique: false },
  mode: { type: String, required: false, unique: false },
});

//hashes user's password before storing user data in database
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
