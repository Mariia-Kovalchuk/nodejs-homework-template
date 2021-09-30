const listContacts = require('./listContacts')
const {Contact} = require('../../db/contactModel')


const getContactById = async (contactId) => {
  try {
    // const contacts = await listContacts();
    // const contact = contacts.find(item => item.id === Number(contactId));
    // if (!contact) {
    //   return null
    // }
    // return contact

    return await Contact.findOne({ _id: contactId })
        
  } catch (error) {
    throw error
  }

};

module.exports = getContactById;