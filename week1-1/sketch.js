function setup() {
  createCanvas(1000, 400);
  background(255, 204, 100);
}

function draw() {
  
  stroke(255);
  fill(100, 160, 0);
  rect(50, 100, 100, 70);
  
  
  //this is a triangle
  //noStroke();
  //fill(240, 30, 224, 50);
  //triangle(150, 60, 100, 60, 100, 250);
  
  //this is a circle
  //ellipseMode(CORNER);
  ellipse(50, 100, 100, 100);
  
  fill(2000, 100, 0, 98);
  ellipse(50, 100, 50, 10);
  
  stroke(255);
  line(50, 100, 1000, 0);
  line(1000, 0, 0, 400);
  
  
}