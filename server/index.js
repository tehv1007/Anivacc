const express = require("express");
const multer = require("multer");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.static(__dirname + "/../dist/images"));

const checkFileType = function (file, cb) {
  //Allowed file extensions
  const fileTypes = /jpeg|jpg|png|webp|gif|svg/;

  //check extension names
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: You can Only Upload Images!!");
  }
};

// Cấu hình multer để lưu trữ ảnh trong public folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "public/images");
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

const getCurrentHost =
  process.env.MODE === "development"
    ? "http://localhost:5174"
    : "http://admin.cnc-animalhealth.com";

// API route cho việc upload ảnh
app.post(`${getCurrentHost}/api/upload`, upload.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  // Trả về đường dẫn của ảnh đã upload
  res
    .status(200)
    .json({ imageUrl: `${getCurrentHost}/images/${file.filename}` });
});

app.get("/", (req, res) =>
  res.status(200).json({ message: "welcome to CNC API" })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
