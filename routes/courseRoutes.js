import express from 'express';
import {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse
} from '../controllers/courseController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, getAllCourses);
router.get('/:id', verifyToken, getCourseById);
router.post('/', verifyToken, authorizeRoles('admin', 'teacher'), addCourse);
router.put('/:id', verifyToken, authorizeRoles('admin', 'teacher'), updateCourse);
router.delete('/:id', verifyToken, authorizeRoles('admin'), deleteCourse);

export default router;
