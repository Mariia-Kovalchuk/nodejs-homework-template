const { Contact } = require('../../db/models/contactModel')

const checkPhoneUniqueness = async (phone) => {
  const contact = await Contact.findOne({ phone: phone })

  if (contact) {
    return contact
  } else {
    return false
  }
}

module.exports = checkPhoneUniqueness
