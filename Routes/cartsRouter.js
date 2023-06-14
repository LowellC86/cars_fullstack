const express = require('express')
const Router = require('express').Router()
const cartController = require('../controllers/cartController')

Router.get('/', cartController.getAllCart)

Router.post('/:vehicle_name', cartController.addNewVehicle)
Router.post('/delete', cartController.deleteVehicleFromCart)


module.exports = Router
