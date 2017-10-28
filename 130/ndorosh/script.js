// Wall Drawing #130 (1972)
//Grid and arcs from four corners.


var canvasWidth = 600;
var canvasHeight = 600;

//arc(a,b,c,d,start,stop,[mode])
function setup() {
createCanvas(canvasWidth, canvasHeight);
background(color (79,198,200));
drawGrid(50,50);
}

function drawGrid(x,y){
  noFill();
  stroke('white');
  strokeWeight(5);
  rect(0, 0, canvasWidth, canvasHeight);
   for (var i=x; i<=canvasHeight; i+=y){
  line (0, i, canvasWidth, i);
  line (i, 0,i,canvasHeight);
  }
  drawArc();
}

function drawArc(){
  noFill();
  stroke('white');
  for (var x=100; x<=1000; x+=100) {
    //topright
    arc(600, 0, x, x, HALF_PI, PI);
    // topleft
    arc(0, 0, x, x, 0, HALF_PI);
    //bottom right
    arc(600, 600, x, x, PI, PI+HALF_PI);
    //bottom left
    arc(0,600, x, x, PI+QUARTER_PI, TWO_PI);
  }
 
}