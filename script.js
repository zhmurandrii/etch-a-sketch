const container = document.getElementById("container");
const smallDiv = document.createElement("div");

for (i = 0; i < 16 * 16; i++) {
  addSquare();
}

function addSquare() {
  const smallDiv = document.createElement("div");
  smallDiv.classList.add("smallDiv");
  smallDiv.addEventListener("mousedown", function () {
    smallDiv.classList.add("changeColor");
  });
  container.appendChild(smallDiv);
}
