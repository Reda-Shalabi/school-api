import Teacher from "../models/Teacher.js";

export const addTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (err) {
    next(err);
  }
};

export const getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    next(err);
  }
};

export const updateTeacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(teacher);
  } catch (err) {
    next(err);
  }
};

export const deleteTeacher = async (req, res, next) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted" });
  } catch (err) {
    next(err);
  }
};
