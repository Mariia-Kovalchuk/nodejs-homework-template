const usersHendlers = require('../../services/users')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  emailVerifyToken: Joi.string().required(),
})

const userEmailVerification = async (req, res, next) => {
  const { verificationToken } = req.params
  const { error } = joiSchema.validate({ emailVerifyToken: verificationToken })
  if (error) {
    throw new BadRequest(` ${error.message}.`)
  }

  const result = await usersHendlers.verifyUserEmail(verificationToken)
  if (result) {
    res.json({ message: 'Verification successful' })
  } else {
    throw new NotFound(`User with verification email Token ${verificationToken} not found or email have been verified already`)
  }
}

module.exports = userEmailVerification
