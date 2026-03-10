import mongoose from "mongoose";

const oppSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  ngoId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Opportunity", oppSchema);