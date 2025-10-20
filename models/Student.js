import mongoose from "mongoose";

const StudentSchema =  mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  dob: {
    type: Date,
    default: "Unknown",
  },
  class: {
    type: String,
    default: "unknown",
  },
});

export default mongoose.model("Student", StudentSchema);
