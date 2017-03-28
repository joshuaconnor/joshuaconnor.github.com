var vectors = [];
var gridSize = 100;
var sizex = 500;
var sizey = 500;
var numberWide = (sizex/gridSize)+1;
var numberTall = (sizey/gridSize)+1;
var randomnessFactor = .3;
var randomMovementFactor = 2;



function setup() {
  createCanvas(sizex, sizey);
  background(80);
  stroke(200);
  strokeWeight(1);
  noFill();

  createGrid();
  randomize();
  make2();
}

function draw() {
  //background(80);
  //stroke(200);
  //strokeWeight(1);
  //noFill();

  //moveGrid();
  //make2();
}