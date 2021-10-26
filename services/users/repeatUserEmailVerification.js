const { NotFound, BadRequest } = require('http-errors')
const getUserByEmail = require('./getUserByEmail')
const { sendEmail } = require('../../helpers')

const repeatUserEmailVerification = async (email) => {
  const user = await getUserByEmail(email)
  if (!user) {
    throw new NotFound(`No user with email ${email}. Please, check your request`)
  }
  if (user.verifyEmail) {
    throw new BadRequest('Verification has already been passed.')
  } else {
    await sendEmail(user)
    return true
  }
}

module.exports = repeatUserEmailVerification
