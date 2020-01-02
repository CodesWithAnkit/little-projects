const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
const app = express()

// CORS
app.use(cors())
app.use(bodyParser.json()) //Parsing the body
// Imported routes
const postRoute = require('./routes/posts')

// Middleware
app.use('/posts', postRoute)

// Routes
app.get('/', (req, res) => {
  res.send('We are at home')
})

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT, //Connected to DB by the help of DOTENV
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
)

app.listen(5000, () => console.log('Listining to port 5000'))

// Password
