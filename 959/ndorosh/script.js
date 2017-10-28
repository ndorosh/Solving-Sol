// Wall Drawing #959 (2001)

//Uneven bands from the upper right corner.


var canvasWidth = 600;
var canvasHeight = 600;
var colorPal = ['purple','green','cyan', 'blue'];


function setup() {
createCanvas(canvasWidth, canvasHeight);


}

function draw() {
background(color ('black'));
noLoop();
drawLines();
  
}
function mouseClicked(){
  redraw();
}

function drawLines() {
for (var i =0; i<=600; i+=random(40,60)){
 stroke(color(random(colorPal)));
 strokeCap(PROJECT);
  strokeWeight(i/20);
  line (600,0,0,i);
  line (i,600,600,0);
}

}

// needs to split in half, with end point as the topright, or the start as the top right

