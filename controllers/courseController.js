import Course from "../models/Course.js";

export const addCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    next(err);
  }
};

export const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(course);
  } catch (err) {
    next(err);
  }
};

export const deleteCourse = async (req, res, next) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (err) {
    next(err);
  }
};
