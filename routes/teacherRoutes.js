import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  addTeacher,
  updateTeacher,
  deleteTeacher
} from '../controllers/teacherController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, authorizeRoles('admin'), getAllTeachers);
router.get('/:id', verifyToken, getTeacherById);
router.post('/', verifyToken, authorizeRoles('admin'), addTeacher);
router.put('/:id', verifyToken, authorizeRoles('admin'), updateTeacher);
router.delete('/:id', verifyToken, authorizeRoles('admin'), deleteTeacher);

export default router;
