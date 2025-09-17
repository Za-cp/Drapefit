const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File Upload Setup using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where uploaded files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Rename file
  }
});
const upload = multer({ storage: storage });

// Upload API
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json({
      message: 'File uploaded successfully',
      file: req.file,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading file');
  }
});

app.use(express.static(path.join(__dirname, '../../../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
});


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
