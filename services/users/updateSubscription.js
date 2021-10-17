const { User } = require('../../db/models/userModel')

const updateSubscription = async (userId, subscription) => {
  try {
    return await User.findOneAndUpdate({ _id: userId }, { subscription }, { new: true })
  } catch (error) {
    throw error
  }
}

module.exports = updateSubscription
