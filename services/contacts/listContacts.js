const { Contact } = require('../../db/models/contactModel')

const listContacts = async (userId, skip, limit) => {
  try {
    const contactList = await Contact.find({ owner: userId }).skip(skip).limit(limit)
    return contactList
  } catch (error) {
    throw error
  }
}

module.exports = listContacts
