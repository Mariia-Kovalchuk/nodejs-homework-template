const contactsHendlers = require('../../services/contacts')

const getAll = async (req, res, next) => {
  const { _id } = req.user
  const contactList = await contactsHendlers.listContacts(_id)
  res.json({ contactList })
}

module.exports = getAll
