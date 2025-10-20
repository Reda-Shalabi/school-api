import express from 'express';
import {
  enrollStudent,
  getAllEnrollments,
  deleteEnrollment
} from '../controllers/enrollmentController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, authorizeRoles('admin', 'teacher'), enrollStudent);
router.get('/', verifyToken, authorizeRoles('admin', 'teacher'), getAllEnrollments);
router.delete('/:id', verifyToken, authorizeRoles('admin'), deleteEnrollment);

export default router;
