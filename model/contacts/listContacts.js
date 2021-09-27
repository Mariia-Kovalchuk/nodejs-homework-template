const fs = require('fs/promises')
const path = require('path');

const contactsPath = path.resolve('db', 'contacts.json');

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath)
    const contactList = JSON.parse(contacts);
    return contactList
        
  } catch (error) {
    throw error
  }
};

module.exports = listContacts;