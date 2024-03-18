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
  //---------- Background -------------------------
  push();

    
  // rainbow
  noStroke();
  
  fill(255,179,186);
  arc(200, 120, 320, 235, PI, 0);
  fill(255,223,186);
  arc(200, 120, 300, 215, PI, 0);
  fill(255,255,186);
  arc(200, 120, 280, 195, PI, 0);
  fill(186,255,201);
  arc(200, 120, 260, 175, PI, 0);
  fill(186,225,255);
  arc(200, 120, 240, 155, PI, 0);
  fill(246,227,255);
  arc(200, 120, 220, 135, PI, 0);
  
  //clouds
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

  //---------- Creature--- -------------------------
  push();
    translate(200, 400);
  
  // Creature Code
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
  
   // blue circle  
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
  
    // green circle
  fill(112, 226, 24);
  noStroke();
  circle(60, -168, 15);
  
    // red circle
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