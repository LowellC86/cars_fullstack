const { Schema } = require('mongoose')

const typeSchema = new Schema(
    {
        type_name: { type: String, required: true },
    }
)

module.exports = typeSchema