const listContacts = require('./listContacts')
const listFavoriteContacts = require('./listFavoriteContacts')
const getContactById = require('./getContactById')
const checkPhoneUniqueness = require('./checkPhoneUniqueness')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContact = require('./updateContact')

module.exports = {
  listContacts,
  listFavoriteContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  checkPhoneUniqueness,
}
