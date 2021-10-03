const { Contact } = require('../../db/models/contactModel')

const removeContact = async (contactId) => {
  try {
    const delContact = await Contact.findByIdAndRemove({ _id: contactId })
    if (delContact === null) {
      return null
    }
    return true
  } catch (error) {
    throw error
  }
}

module.exports = removeContact
