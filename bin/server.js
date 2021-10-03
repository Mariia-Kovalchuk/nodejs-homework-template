const app = require('../app')
const connectMongoDb = require('../db/connection')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const start = async() => {
  try {
    await connectMongoDb()
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.log(error.message)
  }
}
start()
