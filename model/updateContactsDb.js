
const fs = require('fs/promises')
const path = require('path');

const contactsPath = path.join(__dirname, 'contacts.json');


const updateContactsDb = async (newList) => {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(newList));
  } catch (error) {
    throw error
  }
};

module.exports = updateContactsDb;