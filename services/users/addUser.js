const { User } = require('../../db/models/userModel')
const gravatar = require('gravatar')

const addUser = async (body) => {
  try {
    const { email, password, subscription } = body
    const avatarURL = gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, true)
    const newUser = new User({ email, password, subscription, avatarURL })
    await newUser.save()
    return newUser
  } catch (error) {
    throw error
  };
}

module.exports = addUser
