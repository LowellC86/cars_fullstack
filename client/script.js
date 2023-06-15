const aboutButton = document.getElementById("About");
const servicesButton = document.getElementById("Services");
const contactButton = document.getElementById("Contact");
const servicesPage = document.getElementById("servicesPage");
const contactPage = document.getElementById("contactPage");
const buttonInventory = document.querySelector(".inventory");
const bannerSection = document.getElementById("banner");
const cartbutton = document.getElementById("cartbutton");
const cartdiv = document.getElementById("cartdiv");
const aboutLink = document.getElementById("About");
const aboutPage = document.getElementById("aboutPage");
const carList = document.getElementById("carList");
const carListSection = document.getElementById("carList");


aboutLink.addEventListener("click", function (event) {
  event.preventDefault();

  if (aboutPage.style.display === "none") {
    aboutPage.style.display = "block";
    servicesPage.style.display = "none";
    contactPage.style.display = "none";
    bannerSection.style.display = "none";
  } else {
    aboutPage.style.display = "none";
    bannerSection.style.display = "block";
  }
});

servicesButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (servicesPage.style.display === "none") {
    servicesPage.style.display = "block";
    aboutPage.style.display = "none";
    contactPage.style.display = "none";
    bannerSection.style.display = "none";
  } else {
    servicesPage.style.display = "none";
    bannerSection.style.display = "block";
  }
});

contactButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (contactPage.style.display === "none") {
    contactPage.style.display = "block";
    aboutPage.style.display = "none";
    servicesPage.style.display = "none";
    bannerSection.style.display = "none";
  } else {
    contactPage.style.display = "none";
    bannerSection.style.display = "block";
  }
});

buttonInventory.addEventListener("click", async () => {
  if (carListSection.style.display === "none") {
    carListSection.style.display = "block";
    aboutPage.style.display = "none";
    servicesPage.style.display = "none";
    contactPage.style.display = "none";
  } else {
    carListSection.style.display = "none";
  }

  try {
    let response = await axios.get(`http://localhost:3001/api/vehicles`);
    console.log(response.data);
    let vehicles = response.data;
    const cars = vehicles
      .map((vehicle) => {
        return `
          <div>
            <h2>${vehicle.vehicle_name}</h2>
            <h2>${vehicle.ext_color}</h2>
            <img class="image-resize" src=${vehicle.image}></img>
            <h2>$<span style="text-decoration: underline">${vehicle.price}</span></h2>
            <br />
            <button class="addtocart" data-vehicle-id="${vehicle._id}">Add to Cart</button>
          </div>
        `;
      })
      .join(``);
    carListSection.innerHTML = cars;

    const addToCartButtons = document.querySelectorAll(".addtocart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", async (event) => {
        const vehicleId = event.target.dataset.vehicleId;
        console.log(vehicleId)
        console.log(event.target.dataset)
        const name = prompt('Please Enter Your Name')
        const email = prompt('Please enter your email')
        try {
          const cart = await axios.post(`http://localhost:3001/api/cart/`,{name,email})
          console.log(cart.data.cart._id)
          let vehicleResponse = await axios.get(`http://localhost:3001/api/vehicles/${vehicleId}`);
          let selectedVehicle = vehicleResponse.data;
          console.log("Selected Vehicle:", selectedVehicle);

          
          let updatedCart = await axios.put(`http://localhost:3001/api/cart/${cart.data.cart._id}`, selectedVehicle);
          console.log(updatedCart)
          console.log("Vehicle added to cart.");

          
        } catch (error) {
          console.error(error);
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
});
console.log(cartbutton)
cartbutton.addEventListener("click", async () => {
  console.log("hello")
  try {
    console.log("hello")
    let currentcart = await axios.get(`http://localhost:3001/api/cart`);
    console.log(currentcart)
    console.log("currentcart is:", currentcart.data);
    const cars = currentcart.data.map((vehicle) => {
     
      return `
        <div>
          <img class="image-resize" src=${vehicle.image}></img>
          <h2>${vehicle.vehicle_name}</h2>
          <h2>${vehicle.price}</h2>
          <h2>${vehicle.ext_color}</h2>
          <h2>${vehicle.type_id}</h2>
          <h2>${vehicle.make_id}</h2>
          <button class="removefromcart" data-vehicle-id="${vehicle.id}">Remove</button>
        </div>
      `;
    }).join(``);
    cartdiv.innerHTML = cars;

    const removeFromCartButtons = document.querySelectorAll(".removefromcart");
    removeFromCartButtons.forEach((button) => {
      button.addEventListener("click", async (event) => {
        const vehicleId = event.target.dataset.vehicleId;
        try {
          await axios.delete(`http://localhost:3001/api/cart/${vehicleId}`);
          console.log("Vehicle removed from cart.");

        } catch (error) {
          console.error(error);
        }
      });
    });

    
    cartdiv.style.display = "flex";
  } catch (error) {
    console.error(error);
  }
});
