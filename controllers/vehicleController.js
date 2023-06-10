const { Vehicle } = require('../models')
const vehicleSchema = require('../models/vehicle')


const getVehicles = async (req, res)=> {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
}

const getVehiclesById = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle = await Vehicle.findById(id)
        if (vehicle) {
            return res.status(200).json({ vehicle });
        }
        return res.status(404).send('Vehicle with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getVehicles,
    getVehiclesById
}