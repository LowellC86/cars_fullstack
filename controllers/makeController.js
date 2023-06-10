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




module.exports = {
    getMakes,
    getMakesById,
}