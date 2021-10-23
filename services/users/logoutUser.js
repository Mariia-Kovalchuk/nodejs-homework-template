const getUserById = require('./getUserById')
const updateUsersToken = require('./updateUsersToken')
const { Unauthorized } = require('http-errors')

const logoutUser = async(userId) => {
  const user = await getUserById(userId)
  if (!user) {
    throw new Unauthorized('Not authorized.')
  }
  const token = null
  await updateUsersToken(user._id, token)
}

module.exports = logoutUser
