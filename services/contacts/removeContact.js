const { Contact } = require('../../db/models/contactModel')

const removeContact = async (contactId, userId) => {
  try {
    const delContact = await Contact.findOneAndRemove({ _id: contactId, owner: userId })
    if (delContact === null) {
      return null
    }
    return true
  } catch (error) {
    throw error
  }
}

module.exports = removeContact
