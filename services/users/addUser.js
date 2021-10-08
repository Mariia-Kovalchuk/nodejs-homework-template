const { User } = require('../../db/models/userModel')

const addUser = async (body) => {
  try {
    const { email, password, subscription } = body
    const newUser = new User({ email, password, subscription })
    await newUser.save()
    return newUser
  } catch (error) {
    throw error
  };
}

module.exports = addUser
