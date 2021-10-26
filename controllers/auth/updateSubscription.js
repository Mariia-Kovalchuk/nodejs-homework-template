const usersHendlers = require('../../services/users')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business'),
})

const updateSubscription = async (req, res, next) => {
  const { body } = req
  const { error } = joiSchema.validate(body)
  if (error) {
    throw new BadRequest(` ${error.message}.`)
  }

  const { user: { _id }, body: { subscription } } = req
  const user = await usersHendlers.updateSubscription(_id, subscription)
  if (user) {
    res.json(user)
  } else {
    throw new NotFound(`User with id ${_id} not found`)
  }
}

module.exports = updateSubscription
