const listContacts = require('./listContacts')

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(item => item.id === Number(contactId));
    if (!contact) {
      return null
    }
    return contact
        
  } catch (error) {
    throw error
  }

};

module.exports = getContactById;