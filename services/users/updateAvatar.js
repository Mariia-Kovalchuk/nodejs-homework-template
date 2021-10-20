const { User } = require('../../db/models/userModel')

const updateAvatar = async (userId, avatarURL) => {
  try {
    const opts = { runValidators: true, new: true }
    return await User.findOneAndUpdate({ _id: userId }, { avatarURL }, opts)
  } catch (error) {
    throw error
  }
}

module.exports = updateAvatar
