import express from 'express';
import multer from 'multer';
import path from 'path';
const uploadRoutes = require('./routes/uploadRoutes'); // import your upload route

const router = express.Router();

// 1. Storage setup for multer
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// 2. Middleware
const upload = multer({ storage });

// 3. Upload Route
router.post('/', upload.single('image'), (req, res) => {
  res.send({ message: 'Image uploaded successfully', filename: req.file.filename });
});

export default router;
