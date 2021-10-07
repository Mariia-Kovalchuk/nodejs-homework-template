const usersHendlers = require('../../services/users')
const { BadRequest } = require('http-errors')


const logout = async (req, res) => {
  const { user: { id } } = req;
  const user= await usersHendlers.logoutUser(id)

  res.status(204).json(user)
};

module.exports = logout
