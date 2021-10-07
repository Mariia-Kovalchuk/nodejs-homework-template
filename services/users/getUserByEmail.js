const { User } = require('../../db/models/userModel')

const getUser = async (email) => {
  const user = await User.findOne({ email})
  console.log(user);

  if (user) {
    return user
  } else {
    return false
  }
};

module.exports = getUser
