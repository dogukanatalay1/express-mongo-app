const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_CONNECTION_STRING
// const mongoUrl = 'mongodb://localhost:27017/express-mongo-todo'

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(`Veritabanına bağlanıldı ${mongoUrl}`)
})
.catch((error) => {
  console.log(`Veritabanına bağlanılamadı ${error}`)
})
