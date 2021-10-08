const { Contact } = require('../../db/models/contactModel')

const updateContact = async (contactId, body, userId) => {
  try {
    return await Contact.findOneAndUpdate({ _id: contactId, owner: userId }, body, { new: true })
  } catch (error) {
    throw error
  }
}

module.exports = updateContact
