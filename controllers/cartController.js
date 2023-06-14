const { Cart, Vehicle } = require('../models')

const getAllCart = async (req, res)=> {
    try {
        const carts = await Cart.find({})
        console.log("carts: ", carts)
        
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to get cart" })
    }
}

const addNewVehicle = async (req, res) => {
    try {
        
        const vehicle_name = req.params.vehicle_name
        console.log("vn: ", vehicle_name)

        const vehicle = await Vehicle.findOne({ name: vehicle_name })

        const cart = await Cart.findOneAndUpdate(
            { name: 'Cart'},
            { $push: { vehicles: vehicle._id } }, 
            { new: true } 
        ).populate('vehicles');
         res.json({ cart })
    } catch (error) {
        return res.status(500).json({ error: "Failed to add vehicle to cart" })
    }
}

const deleteVehicleFromCart = async (req, res) => {
    try {
        const { vehicle_name } = req.body
        await Cart.findOneAndUpdate(
            { name: 'Cart' },
            { $pull: { vehicles: vehicle_name } },
            { new: true }
        ).populate('vehicles');
        return res.status(200).send("Vehicle deleted");
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete vehicle from cart" })
    }
}

module.exports = {
    getAllCart,
    addNewVehicle,
    deleteVehicleFromCart
}
