const { User } = require('../../db/models/userModel')
// const gravatar = require('gravatar')
const { sendEmail } = require('../../helpers')

const addUser = async (body) => {
  try {
    const { email, password, subscription } = body
    // add default avatar in service
    // const avatarURL = gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, true)
    // const newUser = new User({ email, password, subscription, avatarURL })

    // add default avatar in User model
    const newUser = new User({ email, password, subscription })
    await newUser.save()
    await sendEmail(newUser)

    return newUser
  } catch (error) {
    throw error
  };
}

module.exports = addUser
