let bearRotation = 0;
let isSpinning = false; 
let isScaled = false; 
let bmoScale = 1; 

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  background(217, 242, 233); 
}

function draw() {
  drawBackground();
  drawDino(200, 100, 0.1);
  drawBMO();
  drawBear();
  
  if (isSpinning) {
    bearRotation += 0.05; // Increase rotation angle for spinning
    if (bearRotation >= TWO_PI) {
      // Spinning animation complete
      isSpinning = false;
      isScaled = true; // Set the flag to initiate BMO scaling
    }
  }
  
  if (isScaled) {
    // Scale BMO to 0.25
    bmoScale -= 0.01; // Gradually decrease BMO's scale
    if (bmoScale <= 0.25) {
      // Scaling animation complete
      isScaled = false;
    }
  }
}

function drawBackground() {
  push();
  
  // Rainbow
  noStroke();
  fill(255, 179, 186);
  arc(200, 120, 320, 235, PI, 0);
  fill(255, 223, 186);
  arc(200, 120, 300, 215, PI, 0);
  fill(255, 255, 186);
  arc(200, 120, 280, 195, PI, 0);
  fill(186, 255, 201);
  arc(200, 120, 260, 175, PI, 0);
  fill(186, 225, 255);
  arc(200, 120, 240, 155, PI, 0);
  fill(246, 227, 255);
  arc(200, 120, 220, 135, PI, 0);
  
  // Clouds
  fill(255);
  ellipse(100, 120, 30);
  ellipse(80, 110, 30);
  ellipse(60, 120, 30);
  ellipse(40, 130, 30);
  ellipse(60, 140, 30);
  ellipse(80, 133, 30);
  ellipse(100, 135, 30);
  
  ellipse(300, 120, 30);
  ellipse(320, 110, 30);
  ellipse(340, 120, 30);
  ellipse(360, 130, 30);
  ellipse(340, 140, 30);
  ellipse(320, 133, 30);
  ellipse(300, 135, 30);

  pop();
}

function drawBMO() {
  push();
  translate(200, 400);
  scale(bmoScale); // Apply BMO's scale
  
  // BMO's body
  fill(112, 185, 171);
  noStroke();
  rect(-100, -350, 200, 250, 10);

  fill(215, 244, 221);
  rect(-75, -325, 150, 100, 8);
  
  // BMO's eyes 
  fill(0);
  circle(-40, -290, 15);
  circle(40, -290, 15);
  
  // BMO's mouth
  fill(67, 135, 65);
  arc(0, -265, 40, 40, 0, PI);
  line(-20, -265, 20, -265);
  
  // BMO buttons
  fill(20, 48, 39);
  noStroke();
  rect(-75, -210, 110, 8);
  
  // Blue circle  
  fill(12, 2, 170);
  noStroke();
  circle(65, -206, 12);
 
  fill(242, 223, 86);
  noStroke();
  rect(-50, -180, 12, 35);
  rect(-62, -168, 35, 12);
  
  fill(130, 206, 234);
  noStroke();
  triangle(20, -190, 8, -168, 33, -168);
  
  fill(12, 2, 170);
  stroke(4, 12, 63);
  rect(-75, -125, 40, 8, 20);
  rect(-25, -125, 40, 8, 20);
  
  // Green circle
  fill(112, 226, 24);
  noStroke();
  circle(60, -168, 15);
  
  // Red circle
  fill(214, 52, 29);
  noStroke();
  circle(45, -138, 20);
  
  // BMO's legs
  fill(86, 120, 126);
  noStroke();
  rect(-50, -100, 15, 100, 0, 0, 20, 20);
  rect(40, -100, 15, 100, 0, 0, 20, 20);
  rect(-75, -15, 40, 15, 20, 0, 0, 0);
  rect(40, -15, 40, 15, 0, 20, 0, 0);
  
  // BMO's arms
  fill(20, 48, 39);
  stroke(23, 42, 38);
  rect(100, -210, 10, 40, 0,  20, 20, 0);
  rect(-110, -210, 10, 40, 20, 0, 0, 20);
  
  fill(108, 164, 174);
  noStroke();
  rect(110, -198, 35, 15, 0, 0, 20, 0);
  rect(-145, -198, 35, 15, 0, 0, 0, 20);
  
  rect(130, -278, 15, 90, 20, 20, 0, 0);
  rect(-145, -278, 15, 90, 20, 20, 0, 0);
  
  rect(130, -278, 35, 15, 20, 20, 20, 0);
  rect(-165, -278, 35, 15, 20, 20, 0, 20);
  
  pop();
}

function drawBear() {
  push();
  translate(200, 400);
  
  rotate(bearRotation);
  
  // bear 
  fill(148, 118, 97);
  noStroke(); 
    ellipse(-150, 5-50, 50, 65); // Body
    ellipse(-75-100, -60-50, 25, 25); // left ear
    ellipse(-25-100, -60-50, 25, 25); // right ear
    ellipse(-50-100, -40-50, 50, 50); // head
    ellipse(-65-100, -65, 40, 20); // left arm
    ellipse(-35-100, -65, 40, 20); // right arm
    ellipse(-65-97, -20, 40, 20); // left leg
    ellipse(-35-103, -20, 40, 20); // right leg
    
    fill(0);
    noStroke();
    ellipse(-160, -95, 8, 8); // left eye
    ellipse(-140, -95, 8, 8); // right eye
    ellipse(-150, -90, 8, 5); // nose
    
    fill(148, 118, 97);
    stroke(2);
    arc(-153, -88, 6, 5, 0, PI);
    arc(-146, -88, 6, 5, 0, PI);
  
  pop();
}

function drawDino(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(91, 139, 99);
  noStroke();
  
  //body
  ellipse(0, -175, 200, 100);
  
  //front right leg
  rect(-100, -175, 20, 75);
  ellipse(-105, -100, 50, 20);
  
  //front left leg
  rect(-60, -175, 25, 90);
  ellipse(-60, -85, 50, 20);
  
  //back right leg
  rect(25, -175, 20, 75);
  ellipse(20, -100, 50, 20);
  
  //back left leg
  rect(65, -175, 25, 90);
  ellipse(65, -85, 50, 20);
  
  //neck
  rect(-100, -300, 45, 125);
  
  //head
  ellipse(-95, -300, 80, 60);
  
  //tail
  rotate(-PI/6);
  ellipse(180, -115, 50, 10);
  rotate(PI/6);
  
  //eyes
  fill(0);
  noStroke();
  ellipse(-120, -300, 10);
  ellipse(-105, -300, 8);
  
  pop();
}

function mouseClicked() {
  if (!isSpinning && !isScaled) {
    isSpinning = true; // Start spinning animation of bear's face
  }
}
