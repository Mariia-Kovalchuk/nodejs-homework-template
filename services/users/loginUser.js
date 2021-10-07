const getUserByEmail = require('./getUserByEmail')
const updateUser =require("./updateUser")
const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



const loginUser = async (email, password) => {
    const user = await getUserByEmail(email)
  if (!user) {
    throw new Unauthorized(`Email is wrong.`)
  }
  
  if (!await bcrypt.compare(password, user.password)) {
    throw new Unauthorized(`Password is wrong.`)
  }
  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET);
  
  const updatedUser= await updateUser(user._id, token)
  return { token, updatedUser}
}

module.exports = loginUser;