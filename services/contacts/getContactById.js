// const listContacts = require('./listContacts')
const { Contact } = require('../../db/models/contactModel')

const getContactById = async (contactId) => {
  try {
    return await Contact.findOne({ _id: contactId })
  } catch (error) {
    throw error
  }
}

module.exports = getContactById
