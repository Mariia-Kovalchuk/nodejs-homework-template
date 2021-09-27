const listContacts = require('./listContacts')
const updateContactsDb = require('./updateContactsDb')


const addContact = async (body) => {
  try {
    const { name, email, phone } = body;
    const newContact = {
      id: 0,
      name,
      email,
      phone
    };
    const contacts = await listContacts();
    const listLength = contacts.length;
    newContact.id = contacts[listLength - 1].id + 1;
    const newContacts = [...contacts, newContact];
    await updateContactsDb(newContacts);
    return newContact;
        
  } catch (error) {
    throw error
  };

};

module.exports = addContact;