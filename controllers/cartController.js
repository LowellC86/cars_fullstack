const { Cart, Vehicle } = require('../models')

const getAllCart = async (req, res) => {
    // return the cart with name "Cart"
    try {
        const cart = await Cart.findOne({ name: 'Cart' }).populate('vehicles')
        return res.json({ cart })
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to get cart" })
    }
}

const addNewVehicle = async (req, res) => {
    try {
        // request is gonna send over a string, which holds the vehicle_name that we will
        // search the mongoDB for, using req.params
        const vehicle_name = req.params.vehicle_name

        // search the mongoDB for the vehicle_name
        const vehicle = await Vehicle.findOne({ vehicle_name: vehicle_name })
        console.log("vehicle: ", vehicle)

        // now add it to the cart that is already created
        const cart = await Cart.findOneAndUpdate(
            { name: 'Cart'},
            { $push: { vehicles: vehicle._id } }, // Add the vehicle ID to the "vehicles" array in the cart
            { new: true } // Return the updated cart
        ).populate('vehicles'); // Populate the "vehicles" field with the complete vehicle objects

        return res.status(200).json({ cart })
    } catch (error) {
        return res.status(500).json({ error: "Failed to add vehicle to cart" })
    }
}

const deleteVehicleFromCart = async (req, res) => {
    try {
        const vehicle_name = req.params.vehicle_name;

        // Find the vehicle to be deleted by its name
        const vehicleToDelete = await Vehicle.findOne({ vehicle_name: vehicle_name });

        // Pull the vehicle's ObjectId reference from the cart
        await Cart.findOneAndUpdate(
            { name: 'Cart' },
            { $pull: { vehicles: vehicleToDelete._id } },
            { new: true }
        ).populate('vehicles');
        return res.status(200).json({ message: "Vehicle deleted from cart" })
    } catch (error) {
        console.log("error: ", error)
        return res.status(500).json({ error: "Failed to delete vehicle from cart" })
    }
}

module.exports = {
    getAllCart,
    addNewVehicle,
    deleteVehicleFromCart
}
