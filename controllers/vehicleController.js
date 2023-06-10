const { Vehicle } = require('../models')
const vehicleSchema = require('../models/vehicle')


const getVehicles = async (req, res)=> {
    const vehicles = await Phone.find()
    res.json(vehicles)
}