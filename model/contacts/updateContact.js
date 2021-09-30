const listContacts = require('./listContacts')
const updateContactsDb = require('./updateContactsDb')
const {Contact} = require('../../db/contactModel')



const updateContact = async (contactId, body) => {
  try {
    // const contacts = await listContacts();
    // const idx = contacts.findIndex(({ id }) => id === Number(contactId));
    // if (idx===-1) {
    //   return null
    // };
    // contacts[idx] = { ...contacts[idx], ...body }
    // await updateContactsDb(contacts);
    // return contacts[idx];

     return Contact.findByIdAndUpdate({ _id: contactId }, body, { new: true })

  } catch (error) {
    throw error
  }
  
};

module.exports = updateContact;