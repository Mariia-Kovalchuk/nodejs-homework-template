const { Contact } = require('../../db/models/contactModel')

const listFavoriteContacts = async (userId, skip, limit,favorite) => {
  try {
    const contactList = await Contact.find({ owner: userId, favorite }).skip(skip).limit(limit)
    return contactList
  } catch (error) {
    throw error
  }
}

module.exports = listFavoriteContacts
