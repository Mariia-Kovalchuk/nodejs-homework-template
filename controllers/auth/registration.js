const usersHendlers = require('../../services/users')
const Joi = require('joi')
const { Conflict, BadRequest } = require('http-errors')

const joiSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(2).max(30).required(),
  subscription: Joi.string(),
})

const registration = async (req, res) => {
  const { body } = req
  const { error } = joiSchema.validate(body)
  if (error) {
    throw new BadRequest(` ${error.message}.`)
  }

  const { email } = body
  const user = await usersHendlers.getUserByEmail(email)
  if (user) {
    throw new Conflict(`Email ${email} in use.`)
  } else {
    const newUser = await usersHendlers.addUser(body)
    res.status(201).json(newUser)
  };
}

module.exports = registration
