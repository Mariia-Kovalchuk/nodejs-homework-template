const contactsHendlers = require('../../services/contacts')
const { NotFound } = require('http-errors')

const deleteItem = async (req, res) => {
  const { contactId } = req.params
  const { _id } = req.user
  const isContactDeleted = await contactsHendlers.removeContact(contactId, _id)
  if (isContactDeleted) {
    res.json({ message: 'Contact deleted' })
  } else {
    throw new NotFound(`Contact with id ${contactId} not found`)
  }
}

module.exports = deleteItem
