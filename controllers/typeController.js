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

const createType = async (req, res) => {
    try {
        const type = await new Vehicle(req.body)
        await type.save()
        return res.status(201).json({
            type,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}



const updateType = async (req, res) => {
    try {
        let { id } = req.params;
        let type = await Type.findByIdAndUpdate(id, req.body, { new: true })
        if (type) {
            return res.status(200).json(type)
        }
        throw new Error("Type not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteType = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Type.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Type deleted");
        }
        throw new Error("Type not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getTypes,
    getTypesById,
    createType,
    updateType,
    deleteType
}
