const { Schema } = require("mongoose");

const cartSchema = new Schema({
    
    vehicles: [{
        type: Schema.Types.ObjectId,
        ref: "Vehicle"
    }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        
        }
});

module.exports = cartSchema;
