import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Multer storage config for profile pictures and documents
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = 'uploads/profiles';
    if (req.user && req.user.role === 'student') {
      uploadPath = `uploads/students/student_${req.user._id}/documents`;
    }

    // Ensure directory exists
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${path.basename(file.originalname)}`);
  },
});

const upload = multer({ storage });
export default upload;
