const Joi = require('joi')
const { BadRequest } = require('http-errors')

const userHendlers = require('../../services/users')

const joiSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(2).max(30).required(),
})

const registration = async (req, res) => {
  const { body } = req
  const { error } = joiSchema.validate(body)
  if (error) {
    throw new BadRequest(` ${error.message}.`)
  }

  const { email, password } = body
  const user = await userHendlers.loginUser(email, password)
  res.status(200).json(user)
}

module.exports = registration
