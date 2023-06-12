const { Make } = require('../models')

const getMakes = async (req, res)=> {
    const makes = await Make.find({})
    res.json(makes)
}

const getMakesById = async (req, res) => {
    try {
        const { id } = req.params;
        const make = await Make.findById(id)
        if (make) {
            return res.status(200).json({ make });
        }
        return res.status(404).send('Make with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createMake = async (req, res) => {
    try {
        const make = await new Make(req.body)
        await make.save()
        return res.status(201).json({
            make,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}



const updateMake = async (req, res) => {
    try {
        let { id } = req.params;
        let make = await Make.findByIdAndUpdate(id, req.body, { new: true })
        if (make) {
            return res.status(200).json(make)
        }
        throw new Error("Make not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteMake = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Make.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Make deleted");
        }
        throw new Error("Make not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getMakes,
    getMakesById,
    createMake,
    updateMake,
    deleteMake
}