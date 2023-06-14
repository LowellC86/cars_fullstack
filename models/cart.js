const { Schema } = require("mongoose");

const cartSchema = new Schema({
    // add a list of vehicles to the cart
    vehicles: [{
        type: Schema.Types.ObjectId,
        ref: "Vehicle"
    }],
    name: {
        type: String,
        required: true
    },
});

module.exports = cartSchema;