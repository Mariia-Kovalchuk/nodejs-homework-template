const contactsHendlers = require('../../services/contacts')
const Joi = require('joi')
const { NotFound, BadRequest } = require('http-errors')

const joiSchema = Joi.object({
  favorite: Joi.boolean().required()
})

const updateItemStatus = async (req, res) => {
  const { contactId } = req.params
  const { body } = req
  if (Object.keys(body).length === 0) {
    throw new BadRequest('missing field favorite"')
  }
  const { error } = joiSchema.validate(body)
  if (error) {
    throw new BadRequest(`${error.message}`)
  }

  const updatedContact = await contactsHendlers.updateContact(contactId, body)
  if (updatedContact) {
    res.json(updatedContact)
  } else {
    throw new NotFound(`Contact with id ${contactId} not found`)
  }
}

module.exports = updateItemStatus
