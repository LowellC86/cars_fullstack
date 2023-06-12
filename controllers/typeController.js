const { Type } = require('../models')


const getTypes = async (req, res)=> {
    const types = await Type.find({})
    res.json(types)
}

const getTypesById = async (req, res) => {
    try {
        const { id } = req.params;
        const type = await Type.findById(id)
        if (type) {
            return res.status(200).json({ type });
        }
        return res.status(404).send('Type with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    getTypes,
    getTypesById
}
