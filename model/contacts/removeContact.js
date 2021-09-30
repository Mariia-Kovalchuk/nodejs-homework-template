const listContacts = require('./listContacts')
const updateContactsDb = require('./updateContactsDb')
const {Contact} = require('../../db/contactModel')


const removeContact = async (contactId) => {
    try {
        // await Contact.findByIdAndRemove({ _id: contactId });
        // const contacts = await listContacts();
        // const idx = contacts.findIndex(({ id }) => id === Number(contactId));
        // if (idx === -1) {
            //     return null;
            // }
            // const newContacts = contacts.filter(item => item.id !== Number(contactId));
            // await updateContactsDb(newContacts);
        const delContact = await Contact.findByIdAndRemove({ _id: contactId });
        if (delContact=== null) {
            return null
        }
        return true;
        
    } catch (error) {
        throw error;
    }

};

module.exports = removeContact;
