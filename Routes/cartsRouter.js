const express = require('express')
const Router = require('express').Router()
const cartController = require('../controllers/cartController')

Router.get('/', cartController.getAllCart)
Router.post('/', cartController.createCart)
Router.put('/:id', cartController.addNewVehicle)
Router.put('/:id', cartController.deleteVehicleFromCart)
Router.get('/:id', cartController.getCartById)
Router.get('/user/:name', cartController.getCartByUser)

module.exports = Router
