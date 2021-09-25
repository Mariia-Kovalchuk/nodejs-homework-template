const listContacts = require('./listContacts')

const checkPhoneUniqueness = async (phone) => {
  const contacts = await listContacts();
  const contact = contacts.find(contact => contact.phone === phone);
  if (contact) {
    return contact
  } else {
    return false
  }
};


module.exports = checkPhoneUniqueness;