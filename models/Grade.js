/*
*{
  student: { type: ObjectId, ref: 'Student' },
  course: { type: ObjectId, ref: 'Course' },
  assignmentName: String,
  score: Number,
  maxScore: Number,
  givenBy: { type: ObjectId, ref: 'Teacher' }
}
*/
import mongoose from "mongoose";

const GradeSchema =  mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
  },
  course: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
  assignmentName: {
    type: String,
    default: "Unknown",
  },
  score: {
    type: Number,
    default: 0,
  },
  maxScore: {
    type: Number,
    default: "unknown",
  },
  givenBy: {
    type: mongoose.Types.ObjectId,
    ref: "Teacher",
  },
});

export default mongoose.model("Grade", GradeSchema);
