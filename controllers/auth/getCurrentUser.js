const usersHendlers = require('../../services/users')
const { NotFound } = require('http-errors')

const getCurrentUser = async (req, res, next) => {
  const { user: { id } } = req;
  const contact = await usersHendlers.getUserById(id)
  if (contact) {
    res.json(contact)
  } else {
    throw new NotFound(`Contact with id ${contactId} not found`)
  }
}

module.exports = getCurrentUser
