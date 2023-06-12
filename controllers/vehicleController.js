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

const createVehicle = async (req, res) => {
    try {
        const vehicle = await new Vehicle(req.body)
        await vehicle.save()
        return res.status(201).json({
            vehicle,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateVehicle = async (req, res) => {
    try {
        let { id } = req.params;
        let vehicle = await Vehicle.findByIdAndUpdate(id, req.body, { new: true })
        if (vehicle) {
            return res.status(200).json(vehicle)
        }
        throw new Error("Vehicle not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Vehicle.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Vehicle deleted");
        }
        throw new Error("Vehicle not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getVehicles,
    getVehiclesById,
    createVehicle,
    updateVehicle,
    deleteVehicle
}