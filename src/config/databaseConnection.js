import mongoose from 'mongoose'

const mongoUrl = process.env.MONGO_CONNECTION_STRING

mongoose.connect(mongoUrl, {
  newUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(`Connected to database ${mongoUrl}`)
})
.catch((error) => {
  console.log(`Cannot access database ${error}`)
})

