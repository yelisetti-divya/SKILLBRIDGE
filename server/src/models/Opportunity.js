const mongoose = require("mongoose");

const OpportunitySchema = new mongoose.Schema({
  ngo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  required_skills: {
    type: [String],
    default: []
  },

  duration: {
    type: String
  },

  location: {
    type: String
  },

  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open"
  }

}, { timestamps: true });

module.exports = mongoose.model("Opportunity", OpportunitySchema);