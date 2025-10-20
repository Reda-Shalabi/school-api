import express from 'express';
import {
  addGrade,
  getGradesByStudent,
  updateGrade,
  deleteGrade
} from '../controllers/gradeController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, authorizeRoles('teacher'), addGrade);
router.get('/student/:id', verifyToken, getGradesByStudent);
router.put('/:id', verifyToken, authorizeRoles('teacher'), updateGrade);
router.delete('/:id', verifyToken, authorizeRoles('teacher', 'admin'), deleteGrade);

export default router;
