const express = require('express')
const router = express.Router()
const contactsHendlers = require('../../model');

router.get('/', async (req, res, next) => {
  const contactList = await contactsHendlers.listContacts();
// console.log(contactList);
  res.json({ contactList }).status(200)
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  // console.log(contactId);
  const contact = await contactsHendlers.getContactById(contactId)
  console.log(contact);
  if (contact) {
    res.status(200).json(contact)
  } else {
    res.status(404).json({ message: `Not found. ` })
  }
})

router.post('/', async (req, res, next) => {
  const { body } = req;
  const { name, email, phone } = body;
  if (!name) {
    return res.status(400).json({ message: `missing name field` });
  }
  if (!email) {
    return res.status(400).json({ message: `missing email field` });
  }
  if (!phone) {
   return  res.status(400).json({ message: `missing phone field` })
  }
  const contactWithSamePhone = await contactsHendlers.checkPhoneUniqueness(phone)
  if (contactWithSamePhone) {
    res.status(400).json({ message: `You already have contact ${contactWithSamePhone.name} with phone number ${phone}. ` })
  } else {
    res.status(201).json(await contactsHendlers.addContact(body))
      
  }



});

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const isContactDeleted = await contactsHendlers.removeContact(contactId);
  if (isContactDeleted) {
    res.status(200).json({ message: "contact deleted" })
  } else {
    res.status(404).json({ message: "Not found" })
    
  }
})

router.patch('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;
  if (Object.keys(body).length===0) {
    return res.status(400).json({ message: "missing fields" })
  }
  const contactWithSamePhone = await contactsHendlers.checkPhoneUniqueness(body.phone)
  if (contactWithSamePhone) {
   return res.status(400).json({ message: `You already have contact ${contactWithSamePhone.name} with phone number ${body.phone}. ` })
  };
  const updatedContact = await contactsHendlers.updateContact(contactId, body)
  if (updatedContact) {
    res.status(200).json(updatedContact)
  } else {
    res.status(404).json({ message: `Id ${contactId} Not found` })
  }
    
});

module.exports = router
