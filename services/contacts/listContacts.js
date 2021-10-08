const { Contact } = require('../../db/models/contactModel')

const listContacts = async (userId) => {
  try {
    const contactList = await Contact.find({ owner: userId })
    return contactList
  } catch (error) {
    throw error
  }
}

module.exports = listContacts
