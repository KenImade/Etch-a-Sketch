const gridBox = document.querySelector('.grid-box');
const buttonsContainer = document.querySelector('.buttons');
const btnGray = document.querySelector('.grey-btn');
const btnRGB = document.querySelector('.rgb-btn');
const btnBlack = document.querySelector('.black-btn');
const btnClear = document.querySelector('.clear-btn');
let gridSize = 5;

//function to create the grid
function createGrid() {
  gridBox.style.gridTemplateColumns =  `repeat(${gridSize}, 1fr)`;
  gridBox.style.gridTemplateRows =  `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < (gridSize * gridSize); i++) {
    const gridItem = document.createElement('div');
    //gridItem.style.border = '1px solid red';
    gridBox.appendChild(gridItem).classList.add('grid-item');
  }
  //console.log(col*rows);
}

btnGray.addEventListener('click', createGreyButton);

//function to create the grey color for the grid
function createGreyButton() {
  const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
      gridItem.addEventListener('mouseover',() => {
        //console.log('hello');
        let randomNumber = createRandomNumber();
        gridItem.style.background = `rgb(${randomNumber},${randomNumber},${randomNumber})`;
      })
    })
}

btnRGB.addEventListener('click', createRgbButton);

//function to create the rainbow colors for the grid
function createRgbButton() {
  const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
      gridItem.addEventListener('mouseover',() => {
        //console.log('hello');
        let redColor = createRandomNumber();
        let greenColor = createRandomNumber();
        let blueColor = createRandomNumber();
        gridItem.style.background = `rgb(${redColor},${greenColor},${blueColor})`;
      })
    })
}

//function to generate random numbers from 0 to 255
function createRandomNumber() {
  let randomNumber = Math.floor(Math.random()*255);
  return randomNumber;
}

btnBlack.addEventListener('click', createBlackButton);

//function to create the black color for the grids
function createBlackButton() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
    gridItem.style.background = 'rgb(0,0,0)';
    })
  })
}

btnClear.addEventListener('click', clearGrid);

//function to clear grid
function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => {
    gridItem.style.background = 'rgb(255,255,255)';
  })
  gridBox.innerHTML = "";
  gridSize = Number(prompt('Input Grid Size'));
  console.log(gridSize);
  while (( isNaN(gridSize) === true) || (gridSize === 0) || (gridSize > 100)) {
    alert("Grid size is invalid");
    gridSize = Number(prompt('Input Grid Size'));
  }
  createGrid()
}

createGrid();
