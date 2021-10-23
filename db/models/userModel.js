const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  avatarURL: {
    type: String,
    default: function () {
      return gravatar.url(this.email, { s: '100', r: 'x', d: 'retro' }, true)
    }
  },
  avatarId: {
    type: String,
    default: null
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  },
},
{ versionKey: false, timestamps: true })

userSchema.pre('save', async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10)
  }
})

const User = model('user', userSchema)

User.schema.path('subscription').validate(function(value) {
  return /starter|pro|business/i.test(value)
}, 'Invalid subscription')

module.exports = { User }
