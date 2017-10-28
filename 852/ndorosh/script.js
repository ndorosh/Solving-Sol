//## Wall Drawing #852 (1998)

//
//A wall divided from the upper left to the lower right by a curvy line; left: glossy yellow; right: glossy purple.


var canvasWidth = 1000;
var canvasHeight = 1000;
var cP1 = {x:200, y:50};
var cP2 = {x:300, y:500};


function setup() {
createCanvas(canvasWidth, canvasHeight);
fill(color(168, 129, 193));
rect(0,0,500,500);
}

function draw() {
  noStroke();
  yellowShape();

}

function yellowShape(){
  beginShape();
  fill(color(255, 231, 53));

  vertex(0,0);
  vertex(0,500);
  vertex(500,500);
  
  bezierVertex(cP1.x,cP1.y,cP2.x,cP2.y,0,0);
  endShape();

}

