const db = require('../db')
const { Make, Type, Vehicle, Cart } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const Makes = [
        { name: 'Nissan',
          
        },
        {
          name: 'Toyota',
          
        }
     ]

    const Types = [
        {
            name:'Sedan',
           
        },
        {
            name:'SUV',
           
        },
        {
            name:'Truck',
            
        },
    ]

    const Vehicles = [
        {  
            image:"https://www.toyotaofnewbern.com/assets/stock/ColorMatched_01/Transparent/1280/cc_2023TOC02_01_1280/cc_2023TOC020026_01_1280_1J9.png",     
            vehicle_name: "Toyota Camry SE", 
            release_yr: 2023,
            price: 29988,
            drive_train: "FWD",
            ext_color: "Gray",
            int_color: "Black",
            milage: 7391,
            doors: 4,
            vin: "4T1G11AK8PU724423",
            type_id: Types[0].name,
            make_id: Makes[1].name,
            
        },

        {  
            image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/1d71ab2f29f24d4aa780a2fb486dc89b.png",     
            vehicle_name: "Toyota RAV4 XLE", 
            release_yr: 2023,
            price: 33831,
            drive_train: "FWD",
            ext_color: "Ruby Flare Pearl",
            int_color: "Dapple Gray/Black",
            milage: 1345,
            doors: 4,
            vin: "2T3W1RFV8PW271375",
            type_id: Types[1].name,
            make_id: Makes[1].name,
        
        },

        {
            image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/5b5ae8bb5009704efbdcd0b8a7c0a15e.png",     
            vehicle_name: "Toyota Tacoma SR", 
            release_yr: 2023,
            price: 31553,
            drive_train: "FWD",
            ext_color: "Super White 2",
            int_color: "Cement",
            milage: 1345,
            doors: 4,
            vin: "3TYAX5GNXPT081468",
            type_id: Types[2].name,
            make_id: Makes[1].name,
        },

        {

            image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/86c119309ae7b67a0314f4e5b9eb35fd.png",     
            vehicle_name: "Toyota Corolla Hybrid LE", 
            release_yr: 2023,
            price: 25166,
            drive_train: "FWD",
            ext_color: "Super White 2",
            int_color: "Black",
            milage: 7391,
            doors: 4,
            vin: "JTDBCMFE5PJ006908",
            type_id: Types[0].name,
            make_id: Makes[1].name,
        
        },

        {

            image:"https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_auto/v1/svp/dep/22toyota4runnertrdoffrdprem4wdsu5t/toyota_224runnertrdoffrdprem4wdsu5t_angularfront_magneticgraymetallic",     
            vehicle_name: "Toyota 4Runner SR5", 
            release_yr: 2023,
            price: 42615,
            drive_train: "FWD",
            ext_color: "Magnetic Gray Metallic",
            int_color: "Black/Graphite",
            milage: 1345,
            doors: 4,
            vin: "JTEEU5JR7P5292596",
            type_id: Types[1].name,
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
            type_id: Types[2].name,
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
            type_id: Types[0].name,
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
            type_id: Types[1].name,
            make_id: Makes[0].name,
            
        },

        {  
            
            image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/76fab05d200394911356a6917d69c447.png",     
            vehicle_name: "Nissan Titan 4x4 Crew Cab PRO-4X", 
            release_yr: 2023,
            price: 62965,
            drive_train: "FWD",
            ext_color: "Baja Storm",
            int_color: "Black",
            milage: 2300,
            doors: 4,
            vin: "1N6AA1ED0PN114433",
            type_id: Types[2].name,
            make_id: Makes[0].name,
            
        },

        {  
            
            image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/5d469b7a9db98f796176da7abc330a95.png",     
            vehicle_name: "Nissan Altima 2.5 SL", 
            release_yr: 2023,
            price: 34645,
            drive_train: "FWD",
            ext_color: "Gun Metallic",
            int_color: "Charcoal",
            milage: 5600,
            doors: 4,
            vin: "1N4BL4EV1PN390038",
            type_id: Types[0].name,
            make_id: Makes[0].name,
            
        },

        {  
            
            image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/thumbnails/large/chrome/baf5bb2eb1e207a6d7da44a57ed1381f.png",     
            vehicle_name: "Nissan Pathfinder SL", 
            release_yr: 2023,
            price: 49535,
            drive_train: "4WD",
            ext_color: "Super Black",
            int_color: "Charcoal",
            milage: 4267,
            doors: 4,
            vin: "5N1DR3CD4PC253754",
            type_id: Types[1].name,
            make_id: Makes[0].name,
            
        },

        {  
            
            image:"https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/abaa1bc1a58abcd5597c3441468342da.png",     
            vehicle_name: "Nissan Frontier Crew Cab 4x2 PRO-X", 
            release_yr: 2023,
            price: 42385,
            drive_train: "RWD",
            ext_color: "Tactical Green Metallic",
            int_color: "Charcoal W/Lava Red Stit",
            milage: 3428,
            doors: 4,
            vin: "1N6ED1EJ6PN646848",
            type_id: Types[2].name,
            make_id: Makes[0].name,
            
        },
    ]


    await Type.deleteMany()
    await Make.deleteMany()
    await Vehicle.deleteMany()
    await Cart.deleteMany()
    await Type.insertMany(Types)
    console.log('type created')
    await Make.insertMany(Makes)
    console.log('make created')
    await Vehicle.insertMany(Vehicles)
    console.log("Check these cars out!")
    await Cart.insertMany(Carts)
    console. log ("Empty cart created'")

}

const run = async () => {
    console.log("running")
    await main()
    db.close()   
} 

run()