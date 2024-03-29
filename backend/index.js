const connectToMongo = require('./db')
const express = require('express')
const dotenv = require("dotenv")

dotenv.config()

const app = express()
const port = 3000

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})