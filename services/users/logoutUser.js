const getUserById = require('./getUserById')
const updateUser =require("./updateUser")


const logoutUser = async(userId) => {
    const user = await getUserById(userId)
    console.log(user);
  if (!user) {
    throw new Unauthorized(`Not authorized.`)
  }
  const token = null
  await updateUser(user._id, token)
}

module.exports = logoutUser;