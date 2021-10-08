const usersHendlers = require('../../services/users')
const { NotFound } = require('http-errors')

const getCurrentUser = async (req, res, next) => {
  const { user: { _id } } = req
  const contact = await usersHendlers.getUserById(_id)
  if (contact) {
    res.json(contact)
  } else {
    throw new NotFound(`Contact with id ${_id} not found`)
  }
}

module.exports = getCurrentUser
