const addUser = require('./addUser')
const getUserByEmail = require('./getUserByEmail')
const getUserById = require('./getUserById')
const loginUser = require('./loginUser')
const updateUsersToken = require('./updateUsersToken')
const updateSubscription = require('./updateSubscription')
const updateAvatar = require('./updateAvatar')
const logoutUser = require('./logoutUser')

module.exports = {
  addUser,
  getUserByEmail,
  getUserById,
  loginUser,
  updateUsersToken,
  updateAvatar,
  updateSubscription,
  logoutUser
}
