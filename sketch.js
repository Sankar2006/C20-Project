
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
  
  r = map(mouseX, 200, 23,157, 209);
  g = map(mouseX, 200, 34,165,230);
  b = map(mouseX, 200, 10,179,254);
  
  background(r,g,b);

  stroke("white");
  strokeWeight(10);
  fill("black");
  ellipse(mouseX, 200, 50,50);

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}