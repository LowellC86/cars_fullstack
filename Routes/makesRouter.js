const Router = require('express').Router()
const controller = require('../controllers/makeController.js')


Router.get('/', controller.getMakes)
Router.get('/:id', controller.getMakesById)


Router.get('/nissan', controller.getNissanVehicles)
Router.get('/toyota', controller.getToyotaVehicles)





module.exports = Router
