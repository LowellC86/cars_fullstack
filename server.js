const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const AppRouter = require('./Routes/AppRouter')
const logger = require('morgan')
const bodyParser = require('body-parser')
const vehiclesController = require('./controllers/vehicleController')
const Vehicles = require('./models/vehicle');


const { Make } = require('./models')
const { Type } = require('./models')
const { Vehicle } = require('./models')


app.use('/', AppRouter)
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Buy a car!')
})

app.get('/', (req, res) => res.send('This is a car!'))
app.post('/vehicles', vehiclesController.createVehicle)
app.put('/vehicles/:id', vehiclesController.updateVehicle)
app.delete('/vehicles/:id', vehiclesController.deleteVehicle)