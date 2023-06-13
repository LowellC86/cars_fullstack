let camryButton = document.querySelector("#camryButton")


camryButton.addEventListener('click', async () => {
    let response = await axios.get(`http://localhost:3001/api/vehicles`) 
    console.log (response.data)
let vehicles = response.data
const cars = vehicles.map (vehicle=>{
     return `<h2>${vehicle.vehicle_name}</h2>
      <img class="image-resize" src = ${vehicle.image}></img>`
}).join(``)
document.getElementById(`carList`).innerHTML=cars
}
)

