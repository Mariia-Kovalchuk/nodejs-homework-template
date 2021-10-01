const { Contact } = require('../../db/models/contactModel')

const updateContact = async (contactId, body) => {
  try {
    return await Contact.findByIdAndUpdate({ _id: contactId }, body, { new: true })
  } catch (error) {
    throw error
  }
}

module.exports = updateContact
