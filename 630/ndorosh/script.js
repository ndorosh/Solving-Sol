// Wall Drawing #630 (1990)

//A wall is divided horizontally into two equal parts. 
//Top: alternating horizontal black and white 8-inch (20 cm) bands. 
//Bottom: alternating vertical black and white 8-inch (20 cm) bands.
var canvasWidth = 500;
var canvasHeight = 500;


function setup() {
createCanvas(canvasWidth, canvasHeight);
background(color (249, 210, 162));
drawGrid();
drawLinesTop(0,0);
drawLinesBottom(0,0);


}

function draw() {

  
}


function drawGrid(){
  
  stroke('white');
  strokeWeight(5);
  rect(0, 0, canvasHeight, canvasWidth);
  //line (0,250,500,250);
  
}

function drawLinesTop(x,y){
  strokeCap(SQUARE);
  strokeWeight(20);
  for (var y; y<=(canvasHeight/2); y+=40){
    line (x, y, canvasWidth, y);
  }
  
}


function drawLinesBottom(a,b){
  strokeWeight(20);
  for (var a; a<=(canvasWidth); a+=40){
    line (a+10, canvasWidth/2, a+10, canvasWidth);
  }
  
}