const multer = require('multer')
const path = require('path')
const { v4 } = require('uuid')
const { UnsupportedMediaType } = require('http-errors')

const tempDir = path.resolve('./tmp')

const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split('.')
    cb(null, `${v4()}.${extension}`)
  },
  limits: {
    fileSize: 2048
  }
})

const uploadMiddleware = multer({
  storage: uploadConfig,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new UnsupportedMediaType('Only jpg, jpeg mimrtypes are allowed'))
    }
  }
})

module.exports = uploadMiddleware
