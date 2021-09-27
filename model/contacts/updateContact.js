const listContacts = require('./listContacts')
const updateContactsDb = require('./updateContactsDb')


const updateContact = async (contactId, body) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(({ id }) => id === Number(contactId));
    if (idx===-1) {
      return null
    };
    contacts[idx] = { ...contacts[idx], ...body }
    await updateContactsDb(contacts);
    return contacts[idx];

  } catch (error) {
    throw error
  }
  
};

module.exports = updateContact;