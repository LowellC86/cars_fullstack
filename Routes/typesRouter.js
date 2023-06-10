const express = require('express')
const Router = require('express').Router()
const typesController = require('../controllers/typeController.js')






Router.get('/', typesController.getTypes)
Router.get('/:id', typesController.getTypesById)




module.exports = Router