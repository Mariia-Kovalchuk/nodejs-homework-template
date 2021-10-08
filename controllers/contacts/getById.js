const contactsHendlers = require('../../services/contacts')
const { NotFound } = require('http-errors')

const getById = async (req, res, next) => {
  const { contactId } = req.params
  const { _id } = req.user
  const contact = await contactsHendlers.getContactById(contactId, _id)
  if (contact) {
    res.json(contact)
  } else {
    throw new NotFound(`Contact with id ${contactId} not found`)
  }
}

module.exports = getById
