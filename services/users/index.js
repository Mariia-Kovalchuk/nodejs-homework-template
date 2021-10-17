const addUser = require('./addUser')
const getUserByEmail = require('./getUserByEmail')
const getUserById = require('./getUserById')
const loginUser = require('./loginUser')
const updateUsersToken = require('./updateUsersToken')
const updateSubscription = require('./updateSubscription')
const logoutUser = require('./logoutUser')

module.exports = {
  addUser,
  getUserByEmail,
  getUserById,
  loginUser,
  updateUsersToken,
  updateSubscription,
  logoutUser
}
