const contactsHendlers = require('../../model/contacts')
const { NotFound } = require("http-errors");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsHendlers.getContactById(contactId)
  if (contact) {
    res.json(contact)
  } else {
   throw new NotFound(`Contact with id ${contactId} not found`);
  }
}

module.exports = getById;