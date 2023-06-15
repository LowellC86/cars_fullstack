const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()
const AppRouter = require('./Routes/AppRouter')
const logger = require('morgan')
const bodyParser = require('body-parser')

const vehiclesController = require('./controllers/vehicleController')
const typesController = require('./controllers/typeController')
const makesController = require('./controllers/makeController')
const cartController = require('./controllers/cartController')

const Vehicles = require('./models/vehicle')
const Types = require('./models/type')
const Makes = require('./models/make');
const Carts = require('./models/cart')

const { Make, Type, Vehicle, Cart } = require('./models')

app.use('/', AppRouter)
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/api', AppRouter)


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

app.get('/', (req, res) => res.send('This is a car!'))
app.post('/types', typesController.createType)
app.put('/types/:id', typesController.updateType)
app.delete('/types/:id', typesController.deleteType)

app.get('/', (req, res) => res.send('This is a car!'))
app.post('/makes', makesController.createMake)
app.put('/makes/:id', makesController.updateMake)
app.delete('/makes/:id', makesController.deleteMake)

app.get('/cart', cartController.getAllCart)
app.post('/cart/:vehicle_name', cartController.addNewVehicle)
app.put('/cart/:vehicle_name', cartController.deleteVehicleFromCart)