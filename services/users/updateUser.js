const { User } = require('../../db/models/userModel')

const updateUser = async (userId, token) => {
  try {
    return await User.findOneAndUpdate({_id:userId}, {token},  { new: true })
  } catch (error) {
    throw error
  }
}

module.exports = updateUser