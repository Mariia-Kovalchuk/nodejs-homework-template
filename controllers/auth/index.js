const registration = require('./registration')
const login = require('./login')
const logout = require('./logout')
const getCurrentUser = require('./getCurrentUser')
const updateSubscription = require('./updateSubscription')
const updateAvatar = require('./updateAvatar')
const userEmailVerification = require('./userEmailVerification')
const repeatUserEmailVerification = require('./repeatUserEmailVerification')

module.exports = {
  registration,
  login,
  logout,
  getCurrentUser,
  updateSubscription,
  updateAvatar,
  userEmailVerification,
  repeatUserEmailVerification
}
