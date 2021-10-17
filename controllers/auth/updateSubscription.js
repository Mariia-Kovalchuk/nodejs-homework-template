const usersHendlers = require('../../services/users')
const { NotFound } = require('http-errors')

const updateSubscription = async (req, res, next) => {
  const { user: { _id }, body: { subscription } } = req
  const contact = await usersHendlers.updateSubscription(_id, subscription)
  if (contact) {
    res.json(contact)
  } else {
    throw new NotFound(`Contact with id ${_id} not found`)
  }
}

module.exports = updateSubscription
