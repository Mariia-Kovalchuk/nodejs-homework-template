const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connectMongoDb = async () => {
  return mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Database connection successful')
  })
    .catch(error => {
      console.log(error.message)
      process.exit(1)
    })
}

module.exports = connectMongoDb
