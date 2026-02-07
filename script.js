const container = document.getElementById("container");
const smallDiv = document.createElement("div");

const width = 340;
const height = width;
const widthSQRT = Math.floor(Math.sqrt(width));
console.log(widthSQRT);

for (i = 0; i < widthSQRT ** 2; i++) {
  addSquare();
}

function addSquare() {
  const smallDiv = document.createElement("div");
  smallDiv.classList.add("smallDiv");
  smallDiv.style.width = `${100 / widthSQRT}%`;
  smallDiv.style.height = `${100 / widthSQRT}%`;
  smallDiv.addEventListener("mousedown", function () {
    smallDiv.classList.add("changeColor");
  });
  container.appendChild(smallDiv);
}
