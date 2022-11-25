const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_CONNECTION_STRING

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
