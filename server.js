const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const AppRouter = require('./Routes/AppRouter')
const logger = require('morgan')

const { Make } = require('./models')
const { Type } = require('./models')
const { Vehicle } = require('./models')

app.use('/', AppRouter)
app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Buy a car!')
})