const container = document.getElementById("container");
const smallDiv = document.createElement("div");
const sizeButton = document.querySelector("button");
const randomColorButton = document.getElementById("randomColor");
let colorfullDiv = false;

randomColorButton.addEventListener("click", () => {
  randomColorButton.textContent = colorfullDiv
    ? "USE RANDOM COLOR"
    : "USE BLACK COLOR";
  if (colorfullDiv) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    currentRandomColor = `rgb(${r}, ${g}, ${b})`;
  }
  return (colorfullDiv = !colorfullDiv);
});

sizeButton.addEventListener("click", createGrid);
let numOfSquares = 20;
let currentRandomColor = "";

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

function addSquare() {
  const smallDiv = document.createElement("div");
  smallDiv.classList.add("smallDiv");
  smallDiv.style.width = `${100 / numOfSquares}%`;
  smallDiv.style.height = `${100 / numOfSquares}%`;
  smallDiv.addEventListener("mouseover", function () {
    if (colorfullDiv === false) {
      smallDiv.style.backgroundColor = "";
      smallDiv.classList.add("changeColor");
    } else {
      smallDiv.style.backgroundColor = currentRandomColor;
    }
  });
  container.appendChild(smallDiv);
}
