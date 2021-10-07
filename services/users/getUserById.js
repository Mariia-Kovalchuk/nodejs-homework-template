const { User } = require('../../db/models/userModel')

const getUserById = async (id) => {
  const user = await User.findOne({ _id: id})
  console.log(user);

  if (user) {
    return user
  } else {
    return false
  }
};

module.exports = getUserById
