// ## Wall Drawing #88 (1971)

//A 6-inch (15 cm) grid covering the wall.
//Within each square, not straight lines in either of four directions. 
//Only one direction in each square but as many as desired, and at least one line in each square.

var gridHeight = 600;
var gridWidth = 600;
var canvasWidth = 600;
var canvasHeight = 600;
var startPointX;
var startPointY;
var endPointX;
var endPointY;
var colorPal = ['red','orange','yellow',];


function setup() {
  noLoop();
createCanvas(canvasWidth, canvasHeight);

}
//LINES
function draw() {
  background(color (97,58,67));
  yincr(0,100,4);
  yincr(200,100,3);
  yincr(250,270,2);
  yincr(400,300,3);
  yincr(450,470,4);
  yincr(600,500,5);
  noFill();
  drawGrid();
}

function mousePressed() {
  redraw(); 
  
}  


function drawGrid(){
  
  stroke('white');
  strokeWeight(5);
  rect(0, 0, gridHeight, gridWidth);
   for (var i=100; i<=gridHeight; i+=100){
  line (0, i, gridWidth, i);
  line (i, 0,i,gridHeight);
  }
}

function randNum(x,y){
  return random(x,y);
}

function drawLines(startPointX,startPointY,endPointX,endPointY){
  // bezier(x1,y1,x2,y2,x3,y3,x4,y4)
  stroke(color(random(colorPal)));
  noFill();
  strokeWeight(random(3));
  strokeCap(SQUARE);
 
  bezier (startPointX, startPointY, 
  randNum(startPointX,endPointX), randNum(startPointY,endPointY), 
  randNum(startPointX,endPointX), randNum(startPointY,endPointY),
  endPointX, endPointY)

}

function yincr(x,y,numb){
  for (var i=0; i<=numb; i++){
    for (var j=0; j<=600; j+=100){
    drawLines(x,j,y,j+100);
}
}

}
