const { Contact } = require('../../db/models/contactModel')

const checkPhoneUniqueness = async (phone, userId) => {
  const contact = await Contact.findOne({ phone: phone, owner: userId })

  if (contact) {
    return contact
  } else {
    return false
  }
}

module.exports = checkPhoneUniqueness
