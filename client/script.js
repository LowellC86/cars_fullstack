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
let cartcounter = 0


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
  let response = await axios.get(`http://localhost:3001/api/vehicles`);
  console.log(response.data);
  let vehicles = response.data;
  const cars = vehicles.map((vehicle) => {
    return `
      <div>
        <h2>${vehicle.vehicle_name}</h2>
        <h2>${vehicle.ext_color}</h2>
        <img class="image-resize" src="${vehicle.image}"></img>
        <h2>$<span style="text-decoration: underline">${vehicle.price}</span></h2>
        <br />
        <button class="addtocart" data-vehicle-id="${vehicle._id}">Add to Cart</button>
      </div>
    `;
  })
  .join(``);
  document.getElementById(`carList`).innerHTML = cars;

  const addToCartButtons = document.querySelectorAll(".addtocart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      // get the vehicle id from the parent element's first child
      let vehicle_name = button.parentElement.firstElementChild.innerHTML
      const name = prompt('Please Enter Your Name');
      const email = prompt('Please enter your email');

      try {
        // get parent element
        await axios.post(`http://localhost:3001/api/cart/${vehicle_name}`)
          .then((response) => {
            if (response.status === 200) {
              alert("Vehicle added to cart.")
            }
          })
        // console.log(cart.data.cart._id);

        // let vehicleResponse = await axios.get(`http://localhost:3001/api/vehicles/${vehicleId}`);
        // let selectedVehicle = vehicleResponse.data;
        // console.log("Selected Vehicle:", selectedVehicle);

        // let updatedCart = await axios.post(`http://localhost:3001/api/cart/${cart.data.cart._id}`, selectedVehicle);
        // console.log(updatedCart);
        // console.log("Vehicle added to cart.");

        // Add the selected vehicle to the cartdiv
        // const vehicleElement = document.createElement("div");
        // vehicleElement.innerHTML = `
        //   <div>
        //     <img class="image-resize" src="${selectedVehicle.image}"></img>
        //     <h2>${selectedVehicle.vehicle_name}</h2>
        //     <h2>${selectedVehicle.price}</h2>
        //     <h2>${selectedVehicle.ext_color}</h2>
        //     <h2>${selectedVehicle.type_id}</h2>
        //     <h2>${selectedVehicle.make_id}</h2>
        //     <button class="removefromcart" data-vehicle-id="${selectedVehicle.id}">Remove</button>
        //   </div>
        // `;
        // cartdiv.appendChild(vehicleElement);

      } catch (error) {
        console.error(error);
      }
    });
  });
});

async function getCartData() {
  let currentcart = await axios.get(`http://localhost:3001/api/cart`);

  const cars = currentcart.data.cart.vehicles.map((vehicle) => {
    return `
      <div>
        <img class="image-resize" src="${vehicle.image}"></img>
        <h2>${vehicle.vehicle_name}</h2>
        <h2>${vehicle.price}</h2>
        <h2>${vehicle.ext_color}</h2>
        <h2>${vehicle.type_id}</h2>
        <h2>${vehicle.make_id}</h2>
        <button class="removefromcart">Remove</button>
      </div>
    `;
  })
  .join(``);

  cartdiv.innerHTML = cars;
}

cartbutton.addEventListener("click", async () => {
  if (cartcounter % 2 === 0) {
    await getCartData();

    const removeFromCartButtons = document.querySelectorAll(".removefromcart");
    removeFromCartButtons.forEach((button) => {
      button.addEventListener("click", async (event) => {
        // get second element child of parent element
        let vehicle_name = button.parentElement.children[1].innerHTML
        console.log("vehicle_name is:", vehicle_name)

        try {
          await axios.put(`http://localhost:3001/api/cart/${vehicle_name}`)
            .then(async (response) => {
              if (response.status === 200) {
                alert("Vehicle removed from cart.")
                await getCartData();
              }
            })
        } catch (error) {
          console.error(error);
        }
      });
    });

    // cartdiv will appear
    cartdiv.style.display = "flex";
  } else {
    // hide cartdiv
    cartdiv.style.display = "none";
  }
  cartcounter += 1;
});
