const container = document.getElementById("container");
const smallDiv = document.createElement("div");
const sizeButton = document.querySelector("button");

let numOfSquares = 20;

function createGrid() {
  numOfSquares = +prompt("enter");
  numOfSquares = Math.floor(numOfSquares);
  container.textContent = "";
  if (numOfSquares <= 0 || numOfSquares >= 100) {
    alert("Please enter a number from 1 to 100");
  } else {
    for (i = 0; i < numOfSquares ** 2; i++) {
      addSquare();
    }
  }
}

sizeButton.addEventListener("click", createGrid);

function addSquare() {
  const smallDiv = document.createElement("div");
  smallDiv.classList.add("smallDiv");
  smallDiv.style.width = `${100 / numOfSquares}%`;
  smallDiv.style.height = `${100 / numOfSquares}%`;
  smallDiv.addEventListener("mouseover", function () {
    smallDiv.classList.add("changeColor");
  });
  container.appendChild(smallDiv);
}
