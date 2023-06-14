const express = require('express')
const Router = require('express').Router()
const cartController = require('../controllers/cartController')

Router.get('/', cartController.getAllCart)

// post a new vehicle and add it to the Cart
Router.post('/:vehicle_name', cartController.addNewVehicle)

// delete a vehicle from the Cart
Router.post('/delete', cartController.deleteVehicleFromCart)


module.exports = Router