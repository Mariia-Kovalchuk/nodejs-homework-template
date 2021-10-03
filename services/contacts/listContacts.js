const { Contact } = require('../../db/models/contactModel')

const listContacts = async () => {
  try {
    const contactList = await Contact.find({})
    return contactList
  } catch (error) {
    throw error
  }
}

module.exports = listContacts
