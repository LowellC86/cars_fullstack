const db = require('../db')
const { Make, Type, Vehicle } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const Makes = [
        { make: 'Nissan',
          make_id: Makes[0].make.name
        },
        {
          make: 'Toyota',
          make_id: Makes[1].make.name   
        }
     ]

    const Types = [
        {
            name:'Sedan',
           type_id: Types[0].type_name
        },
        {
            name:'SUV',
           type_id: Types[1].type_name
        },
        {
            name:'Truck',
            type_id: Types[2].type_name
        },
    ]

    const Vehicles = [
    {  
        image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/d9ac-11002486/4T1S11AK3PU788637/b9856897b33f5db279f26db9a37952eb.jpg",     
        vehicle_name: "Toyota Camry SE", 
        release_yr: 2023,
        price: 29988,
        drive_train: "FWD",
        ext_color: "Gray",
        int_color: "Black",
        milage: 7391,
        doors: 4,
        vin: "4T1G11AK8PU724423",
        type_id: Types[0].type_name,
        make_id: Makes[1].name,
        
    },

    {  
        image:"https://images.dealer.com/autodata/us/color/2023/USD30TOS111C0/3T3.jpg",     
        vehicle_name: "Toyota RAV4 XLE", 
        release_yr: 2023,
        price: 33831,
        drive_train: "FWD",
        ext_color: "Ruby Flare Pearl",
        int_color: "Dapple Gray/Black",
        milage: 1345,
        doors: 4,
        vin: "2T3W1RFV8PW271375",
        type_id: Types[1].type_name,
        make_id: Makes[1].name,
      
    },

    {
        image:"https://images.dealer.com/autodata/us/color/2023/USD30TOS111C0/3T3.jpg",     
        vehicle_name: "Toyota Tacoma SR", 
        release_yr: 2023,
        price: 31553,
        drive_train: "FWD",
        ext_color: "Super White 2",
        int_color: "Cement",
        milage: 1345,
        doors: 4,
        vin: "3TYAX5GNXPT081468",
        type_id: Types[2].type_name,
        make_id: Makes[1].name,
    },

    {

        image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/a3dd-110006891/thumbnails/large/JTDBCMFE3PJ006437/a4e89ee7865b3a6dcad774521dd73369.jpg",     
        vehicle_name: "Toyota Corolla Hybrid LE", 
        release_yr: 2023,
        price: 25166,
        drive_train: "FWD",
        ext_color: "Super White 2",
        int_color: "Black",
        milage: 7391,
        doors: 4,
        vin: "JTDBCMFE5PJ006908",
        type_id: Types[0].type_name,
        make_id: Makes[1].name,
      
    },

    {

        image:"https://content.homenetiol.com/2000292/2171686/0x0/stock_images/8/cc_2023TOS07_01_640/cc_2023TOS070095_01_640_1G3.jpg",     
        vehicle_name: "Toyota 4Runner SR5", 
        release_yr: 2023,
        price: 42615,
        drive_train: "FWD",
        ext_color: "Magnetic Gray Metallic",
        int_color: "Black/Graphite",
        milage: 1345,
        doors: 4,
        vin: "JTEEU5JR7P5292596",
        type_id: Types[1].type_name,
        make_id: Makes[1].name,

    },
    
    {
        
        image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/c29e26e05f6b24d63c0a60f43597f95c.png",     
        vehicle_name: "Toyota Tundra SR", 
        release_yr: 2023,
        price: 42656,
        drive_train: "FWD",
        ext_color: "Super White 2",
        int_color: "Black",
        milage: 1345,
        doors: 4,
        vin: "5TFKB5AA0PX027336",
        type_id: Types[2].type_name,
        make_id: Makes[1].name,
    },

    {  
        
        image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/495ce149caa8bd5c22c37728a18d6f25.png",     
        vehicle_name: "Nissan Sentra SV", 
        release_yr: 2023,
        price: 22955,
        drive_train: "FWD",
        ext_color: "Electric Blue Metallic",
        int_color: "Charcoal",
        milage: 4500,
        doors: 4,
        vin: "3N1AB8CV7PY267188",
        type_id: Types[0].type_name,
        make_id: Makes[0].name,
        
    },

    {  
        
        image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/39185e12ab896a0356afef9d114e13d2.png",     
        vehicle_name: "Nissan Rogue SL", 
        release_yr: 2023,
        price: 38490,
        drive_train: "FWD",
        ext_color: "Super Black",
        int_color: "Charcoal",
        milage: 10,
        doors: 4,
        vin: "JN8BT3CA7PW409551",
        type_id: Types[1].type_name,
        make_id: Makes[0].name,
        
    },

    {  
        
        image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/39185e12ab896a0356afef9d114e13d2.png",     
        vehicle_name: "Nissan Titan 4x4 Crew Cab PRO-4X", 
        release_yr: 2023,
        price: 62965,
        drive_train: "FWD",
        ext_color: "Baja Storm",
        int_color: "Black",
        milage: 2300,
        doors: 4,
        vin: "1N6AA1ED0PN114433",
        type_id: Types[2].type_name,
        make_id: Makes[0].name,
        
    },

]
}