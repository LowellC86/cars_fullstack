const express = require('express')
const Router = require('express').Router()
const controller = require('../controllers/makeController.js')

Router.get('/nissan', controller.getNissanVehicles)

module.exports = Router