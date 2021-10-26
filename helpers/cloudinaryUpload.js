const cloudinary = require('cloudinary').v2

const uploadImg = (tempDir) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(tempDir, {
      folder: 'Avatars',
      transformation: {
        width: 250,
        height: 250,
        crop: 'fill'
      }
    }, (error, result) => {
      if (error) reject(error)
      if (result) resolve(result)
    })
  })
}

module.exports = uploadImg
