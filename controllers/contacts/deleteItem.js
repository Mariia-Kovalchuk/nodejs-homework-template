const contactsHendlers = require('../../model')
const { NotFound } = require("http-errors");

const deleteItem  = async (req, res) => {
  const { contactId } = req.params;
  const isContactDeleted = await contactsHendlers.removeContact(contactId);
  if (isContactDeleted) {
    res.json({ message: "Contact deleted" })
  } else {
   throw new NotFound(`Contact with id ${contactId} not found`);
  }
}

module.exports = deleteItem;