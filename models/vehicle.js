const { Schema } = require('mongoose')

const vehicleSchema = new Schema(
    {
        image: {type: String, required: true },
        vehicle_name: { type: String, required: true },
        body_style: { type: String, required: true },
        release_yr: { type: String, required: true },
        price: { type: Number, required: true },
        drive_train: [{ type: String, required: true }],
        ext_color: { type: String, required: true },
        int_color: { type: String, required: true },
        milage: { type: Number, required: true },
        doors: { type: Number, required: true },
        vin: { type: String, required: true },
        platform_id: { type: String, required: true },
        make_id: { type: String, required: true }
    }
)

module.exports = vehicleSchema