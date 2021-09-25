const contactsHendlers = require('../../model')

const getAll = async (req, res, next) => {
        const contactList = await contactsHendlers.listContacts();
        res.json({ contactList })
};

module.exports = getAll;