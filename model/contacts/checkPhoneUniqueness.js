// const listContacts = require('./listContacts')
const {Contact} = require('../../db/contactModel')


const checkPhoneUniqueness = async (phone) => {
  // const contacts = await listContacts();
  // const contact = contacts.find(contact => contact.phone === phone);
  const contact = await Contact.findOne({ phone: phone });

  if (contact) {
    return contact
  } else {
    return false
  }
};


module.exports = checkPhoneUniqueness;