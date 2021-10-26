const { User } = require('../../db/models/userModel')

const verifyUserEmail = async (emailVerifyToken) => {
  try {
    return await User.findOneAndUpdate({ emailVerifyToken }, { verifyEmail: true, emailVerifyToken: null }, { new: true })
  } catch (error) {
    throw error
  }
}

module.exports = verifyUserEmail
