const { Schema } = require('mongoose')

const typeSchema = new Schema(
    {
        name: { type: String, required: true },
    }
)

module.exports = typeSchema