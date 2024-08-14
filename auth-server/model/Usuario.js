const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Email is invalid"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
      validate: {
        validator: function (event) {
          return event === this.password;
        },
        message: "Passwords do not match",
      },
    },
    verifyPassword: {
      type: Boolean,
      default: false,
      select: false,
    },
    otp: {
      type: Number,
    },
    rol: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    imageProfile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  });

module.exports= mongoose.model("Usuario",userSchema);
