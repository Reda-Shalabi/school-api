/**
 * {
  title: String,
  code: { type: String, unique: true },
  description: String,
  teacher: { type: ObjectId, ref: 'Teacher' },
  maxStudents: Number
}
 */
import mongoose from "mongoose";

const CoursesSchema =  mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  Teacher: {
    type: mongoose.Types.ObjectId,
    ref: "Teacher",
  },
  maxStudents: {
    type: Number,
  },
  code: {
    type: String,
    unique: true,
  },
});

export default mongoose.model("Course", CoursesSchema);
