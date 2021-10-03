const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connectMongoDb = async () => {
 const { DB_USER, DB_USER_PASS, DB_NAME } = process.env;
  const DB_HOST=`mongodb+srv://${DB_USER}:${DB_USER_PASS}@db-contacts.jqfvt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  return mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log(`${DB_NAME} database connection successful`)
  })
    .catch(error => {
      console.log(error.message)
      process.exit(1)
    })
}

module.exports = connectMongoDb
