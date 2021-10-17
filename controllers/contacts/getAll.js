const contactsHendlers = require('../../services/contacts')

const getAll = async (req, res, next) => {
  const { _id } = req.user
  let { page = 1, limit = 5, favorite} = req.query;
  page = Number(page);
  limit = Number(limit);
  const skip = (page - 1) * limit;
  console.log(favorite);
  if (!favorite) {
    const contactList = await contactsHendlers.listContacts(_id, skip, limit)
    res.json({ contactList })
    return
  }
  const contactList = await contactsHendlers.listFavoriteContacts(_id, skip, limit,favorite)
  res.json({ contactList })
};

module.exports = getAll
