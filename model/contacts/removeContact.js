const listContacts = require('./listContacts')
const updateContactsDb = require('./updateContactsDb')

const removeContact = async (contactId) => {
      try {
        const contacts = await listContacts();
        const idx = contacts.findIndex(({ id }) => id === Number(contactId));
        if (idx === -1) {
            return null;
        }
        const newContacts = contacts.filter(item => item.id !== Number(contactId));
        await updateContactsDb(newContacts);
        return true;
        
    } catch (error) {
        throw error;
    }

}

module.exports = removeContact;
