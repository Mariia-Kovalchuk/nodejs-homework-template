const addUser = require('./addUser')
const getUserByEmail = require('./getUserByEmail')
const getUserById = require('./getUserById')
const loginUser = require('./loginUser')
const updateUsersToken = require('./updateUsersToken')
const updateSubscription = require('./updateSubscription')
const updateAvatar = require('./updateAvatar')
const logoutUser = require('./logoutUser')
const verifyUserEmail = require('./verifyUserEmail')
const repeatUserEmailVerification = require('./repeatUserEmailVerification')

module.exports = {
  addUser,
  getUserByEmail,
  getUserById,
  loginUser,
  updateUsersToken,
  updateAvatar,
  updateSubscription,
  logoutUser,
  verifyUserEmail,
  repeatUserEmailVerification
}
