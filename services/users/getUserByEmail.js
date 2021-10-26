const { User } = require('../../db/models/userModel')

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email })

  if (user) {
    return user
  } else {
    return false
  }
}

module.exports = getUserByEmail
