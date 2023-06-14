const { Cart, Vehicle } = require('../models')

const getAllCart = async (req, res)=> {
    // return the cart with name "Cart"
    try {
        // print all the carts
        const carts = await Cart.find({})
        console.log("carts: ", carts)
        // const cart = await Cart.findOne({ name: 'Cart' }).populate('vehicles');
        // console.log("cart in fetch is: ", cart)
        // return res.json({ cart })
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
        console.log("vn: ", vehicle_name)

        // search the mongoDB for the vehicle_name
        const vehicle = await Vehicle.findOne({ name: vehicle_name })

        // now add it to the cart that is already created
        const cart = await Cart.findOneAndUpdate(
            { name: 'Cart'},
            { $push: { vehicles: vehicle._id } }, // Add the vehicle ID to the "vehicles" array in the cart
            { new: true } // Return the updated cart
        ).populate('vehicles'); // Populate the "vehicles" field with the complete vehicle objects

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