const aboutButton = document.getElementById("About");
const servicesButton = document.getElementById("Services");
const contactButton = document.getElementById("Contact");
const buttonInventory = document.querySelector(".inventory")
const sedanButton = document.querySelector("#sedanButton")
const suvButton = document.querySelector("#suvButton")
const truckButton = document.querySelector("#truckButton")
const cartbutton = document.getElementById("cartbutton")
const cartdiv = document.getElementById("cartdiv")


buttonInventory.addEventListener('click', async () => {
    let response = await axios.get(`http://localhost:3001/api/vehicles`) 
    console.log (response.data)
    let vehicles = response.data;
    const cars = vehicles.map (vehicle=>{
        return `
            <div>
                <h2>${vehicle.vehicle_name}</h2>
                <h2>${vehicle.ext_color}</h2>
                <img class="image-resize" src = ${vehicle.image}></img>
                <h2>$<span style="text-decoration: underline">${vehicle.price}</span></h2>
                <br />
                <button class="addtocart">Add to Cart</button>
            </div>
        `
    }).join(``)
    document.getElementById(`carList`).innerHTML=cars
})

cartbutton.addEventListener('click', async () => {
    // where we will fetch the current cart
    let currentcart = await axios.get(`http://localhost:3001/api/cart`)
    console.log("currentcart is:", currentcart.data)
    const cars = currentcart.data.map((vehicle) => {
        // get image, vehicle_name, price, ext_color, type_id, and make_id
        return `
            <div>
                <img class="image-resize" src = ${vehicle.image}></img>
                <h2>${vehicle.vehicle_name}</h2>
                <h2>${vehicle.price}</h2>
                <h2>${vehicle.ext_color}</h2>
                <h2>${vehicle.type_id}</h2>
                <h2>${vehicle.make_id}</h2>
            </div>
        }`
    }).join(``)
    cartdiv.innerHTML = cars;

    // hide 
    // cartdiv will appear
    cartdiv.style.display = "flex";
})

