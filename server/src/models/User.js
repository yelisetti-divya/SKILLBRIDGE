const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["volunteer", "ngo"],
    required: true
  },

  skills: {
    type: [String],
    default: []
  },

  location: {
    type: String
  },

  bio: {
    type: String
  },

  organization_name: {
    type: String
  },

  organization_description: {
    type: String
  },

  website_url: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);