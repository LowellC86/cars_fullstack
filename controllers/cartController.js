const { Cart, Vehicle } = require('../models')

const getAllCart = async (req, res)=> {
    try {
        const carts = await Cart.find({})
        console.log("carts: ", carts)
        return res.status(200).json({carts})
    }
    catch (error) {
        return res.status(500).json({ error: "Failed to get cart" })
    }
}

const createCart = async (req, res) => {
    try {
        const cart = await new Cart(req.body)
        await cart.save()
        return res.status(201).json({
            cart,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getCartById = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findById(id)
        if (cart) {
            return res.status(200).json({ cart });
        }
        return res.status(404).send('Cart with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCartByUser = async (req, res) => {
    try {
        const {user} = req.params;
        const cart = await Cart.findOne({name:user})
        return res.status(201).json({
            cart,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


const addNewVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const vehicle_name = req.body.vehicle_name
        console.log("vn: ", vehicle_name)

        const vehicle = await Vehicle.findOne({ name: vehicle_name })

        const cart = await Cart.findByIdAndUpdate(
            id,
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
        const { id } = req.params;
        const { vehicle_name } = req.body
        const vehicle = await Vehicle.findOne({ name: vehicle_name })
        await Cart.findByIdAndUpdate(
            id,
            { $pull: { vehicles: vehicle._id } },
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
    deleteVehicleFromCart,
    createCart,
    getCartById,
    getCartByUser
}
