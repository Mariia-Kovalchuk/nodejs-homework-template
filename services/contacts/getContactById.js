// const listContacts = require('./listContacts')
const { Contact } = require('../../db/models/contactModel')

const getContactById = async (contactId, userId) => {
  try {
    return await Contact.findOne({ _id: contactId, owner: userId })
  } catch (error) {
    throw error
  }
}

module.exports = getContactById
