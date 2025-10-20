import express from 'express';
import {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', verifyToken, authorizeRoles('admin', 'teacher'), getAllStudents);
router.get('/:id', verifyToken, getStudentById);
router.post('/', verifyToken, authorizeRoles('admin'), addStudent);
router.put('/:id', verifyToken, authorizeRoles('admin'), updateStudent);
router.delete('/:id', verifyToken, authorizeRoles('admin'), deleteStudent);

export default router;
