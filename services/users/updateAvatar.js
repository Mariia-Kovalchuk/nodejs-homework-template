const { User } = require('../../db/models/userModel')
const cloudinary = require('cloudinary').v2
const { uploadImg } = require('../../helpers')
const getUserById = require('./getUserById')
const fs = require('fs/promises')

// *local storage of avatars*
// const updateAvatar = async (userId, avatarURL) => {
//   try {
//     const opts = { runValidators: true, new: true }
//     const user = await User.findOneAndUpdate({ _id: userId }, { avatarURL }, opts)
//     return user.avatarURL
//   } catch (error) {
//     throw error
//   }
// }

// *storing avatars on Cloudinary*
const updateAvatar = async (userId, tempDir) => {
  try {
    const { public_id: avatarId, secure_url: avatarURL } = await uploadImg(tempDir)
    const { avatarId: oldAvatarId } = await getUserById(userId)
    cloudinary.uploader.destroy(oldAvatarId)
    const opts = { runValidators: true, new: true }
    const user = await User.findOneAndUpdate({ _id: userId }, { avatarURL, avatarId }, opts)
    await fs.unlink(tempDir)
    return user.avatarURL
  } catch (error) {
    throw error
  }
}

module.exports = updateAvatar
