import mongoose from "mongoose";

const UserSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "student",
    enum: ["admin", "teacher", "student"],
  },
  profilePic: {
    type: String,
  },
});

export  default mongoose.model('User',UserSchema)
