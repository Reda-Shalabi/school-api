import mongoose from "mongoose";

const TeacherSchema =  mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  subject: {
    type: String,
    default: "Unknown",
  },
  phone: {
    type: String,
    default: "unknown",
  },
});

export default mongoose.model("Teacher", TeacherSchema);
