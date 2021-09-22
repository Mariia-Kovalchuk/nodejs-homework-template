const fs = require('fs/promises')
const path = require('path');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath)
    const contactList = JSON.parse(contacts);
    return contactList
        
  } catch (error) {
    throw error
  }
};



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

const updateContactsDb = async (newList) => {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(newList));
  } catch (error) {
    throw error
  }
};

const checkPhoneUniqueness = async (phone) => {
  const contacts = await listContacts();
  const contact = contacts.find(contact => contact.phone === phone);
  if (contact) {
    return contact
  } else {
    return false
  }
};


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

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  checkPhoneUniqueness
}
