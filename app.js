const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const cloudinary = require('cloudinary').v2
require('dotenv').config()
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env

const contactsRouter = require('./routes/api/contactsRoutes')
const usersRouter = require('./routes/api/authRoutes')

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
  secure: true
})

const app = express()
require('dotenv').config()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app
