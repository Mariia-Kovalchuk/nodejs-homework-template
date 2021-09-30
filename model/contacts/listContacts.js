// const fs = require('fs/promises')
// const path = require('path');
const {Contact} = require('../../db/contactModel')

// const contactsPath = path.resolve('db', 'contacts.json');

const listContacts = async () => {
  try {
    // const contacts = await fs.readFile(contactsPath)
    // const contactList = JSON.parse(contacts);
    const contactList = await Contact.find({});
    return contactList
        
  } catch (error) {
    throw error
  }
};

module.exports = listContacts;