const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "UserName is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  phone: {
    type: Number,
    required: [true, "Phone is required."],
    maxlength: 10,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Must match password."],
    validate: {
      validator: function (pwd) {
        return pwd === this.password;
      },
    },
  },
  address: {
    type: String,
    required: [true, "Address is required."],
    maxlength: 80,
  },
});

userSchema.pre(/^save/, async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
