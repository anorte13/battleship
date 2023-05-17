const createShip = require("../src/js/shipFactory.js");

const body = document.getElementById("content");
const carrier = createShip(5);

const button = document.createElement("button");
button.textContent = "Hit Me";
button.addEventListener("click", () => {
  carrier.hit();
});

body.appendChild(button);
