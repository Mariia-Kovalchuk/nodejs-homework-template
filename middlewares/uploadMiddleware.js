const multer = require('multer')
const path = require('path')
const {v4} = require("uuid");

const tempDir = path.resolve('./tmp')

const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
    filename: (req, file, cb) => {
        const [, extension] = file.originalname.split('.');
        cb(null, `${v4()}.${extension}`);

  },
  limits: {
    fileSize: 2048
  }
})

const uploadMiddleware = multer({
  storage: uploadConfig
})

module.exports = uploadMiddleware
