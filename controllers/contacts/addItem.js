const contactsHendlers = require('../../services/contacts')
const Joi = require('joi')
const { BadRequest } = require('http-errors')

const joiSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  phone: Joi.string().max(14).min(6).required(),
  favorite: Joi.boolean()
})

const addItem = async (req, res) => {
  const { body } = req
  const { error } = joiSchema.validate(body)
  if (error) {
    throw new BadRequest(` ${error.message}.`)
  }

  const { phone } = body
  const contactWithSamePhone = await contactsHendlers.checkPhoneUniqueness(phone)
  if (contactWithSamePhone) {
    throw new BadRequest(`You already have contact ${contactWithSamePhone.name} with phone number ${body.phone}.`)
  } else {
    res.status(201).json(await contactsHendlers.addContact(body))
  };
}

module.exports = addItem
