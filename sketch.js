function setup() {
  createCanvas(800, 600);
  background(200);
  strokeWeight(2);
}

function draw() {
  
  // Neck
  stroke(125);
  line(415,100,415,250);
  line(400,100,400,250);
  line(385,100,385,250);
  // Antennas
  line(400,100,360,45);
  line(400,100,440,5);
  line(400,100,480,110);
  // Body
  strokeWeight(0);
  fill(125);
  ellipse(390,450,80,80);
  fill(0);
  rect(330,250,120,200);
  fill(125);
  rect(330,270,120,10);
  // Head
  fill(0);
  ellipse(400,100,110,110);
  fill(255);
  ellipse(415,90,35,35);
  fill(0);
  ellipse(415,90,8,8);
  fill(200);
  ellipse(383,89,14,14);
  ellipse(427,67,10,10);
  ellipse(437,103,7,7);
  
}