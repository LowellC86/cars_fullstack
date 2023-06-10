const { Make, Vehicle } = require('../models')

const getMakes = async (req, res)=> {
    const makes = await Make.find({})
    res.json(makes)
}








module.exports = {
    getMakes,
    getMakesById,
    getVehicles,
    
}