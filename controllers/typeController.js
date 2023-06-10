const { Type, Vechile,  } = require('../models')


const getTypes = async (req, res)=> {
    const types = await Type.find({})
    res.json(types)
}












module.exports = {
    getIosPhones,
    getAndroidPhones,
    getTypes,
    getTypesById
}
