/*{
  student: { type: ObjectId, ref: 'Student' },
  course: { type: ObjectId, ref: 'Course' },
  enrolledAt: Date
}
*/
import mongoose from "mongoose";

const EnrollmentSchema =  mongoose.Schema({
  student: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
  },
  Course: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
  },
  enrolledAt: {
    type: Date,
  },
});

export default mongoose.model("Enrollment", EnrollmentSchema);
