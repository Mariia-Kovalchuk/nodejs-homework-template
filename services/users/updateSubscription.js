const { User } = require('../../db/models/userModel')

const updateSubscription = async (userId, subscription) => {
  try {
    const opts = { runValidators: true, new: true };
    return await User.findOneAndUpdate({ _id: userId }, { subscription }, opts)
  } catch (error) {
    throw error
  }
}

module.exports = updateSubscription
