const db = require('../db')
const { Make, Types, Vehicles } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const Makes = [
        { platform_name: 'Nissan',
        },
        {
         platform_name: 'Toyota',   
        }
     ]

     const Types = [
        {
            name:'Sedan',
           platform_id: Platforms[0].platform_name
        },
        {
            name:'SUV',
           platform_id: Platforms[1].platform_name
        },
        {
            name:'Truck',
            platform_id: Platforms[1].platform_name
        },
    ]}