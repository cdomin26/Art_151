let img;

function preload(){
 img = loadImage('cloud.jpg'); 
}

function setup() {
  createCanvas(970, 580);
  //image(img, 0, 0);
}

function draw() {
  
//print(pmouseX + ', ' + pmouseY);
  
  
  var r = map(pmouseY, 0, height, 135, 0);
  var g = map(pmouseY, 0, height, 206, 0);
  var b = map(pmouseY, 0, height, 235, 0);
  
  var max = 255;
  
  background(max, max, max);
  
  //fill(135,206,235);
  fill(r, g, b);
  stroke(0, 0, 0);
  rect(0, 0, 970, 300); //Sky
  
  fill(0, max, 0);
  stroke(0, 0, 0);
  rect(0, 300, 970, 280); //Grass
  
  fill(0,0,0);
  stroke(0, 0, 0);
  triangle(300,150,450,1,600,150); //Roof
  
  fill(max,248,220);
  stroke(0, 0, 0);
  rect(300, 150, 300, 250); //House
  
  fill(max, max, max);
  stroke(0, 0, 0);
  rect(320, 170,70, 70); //Left Window
  line(355, 170, 355, 240);
  line(320,205, 390, 205);
  
  fill(max, max, max);
  stroke(0, 0, 0);
  rect(510, 170, 70, 70); //Right Window
  line(545, 170, 545, 240);
  line(510, 205, 580, 205);
  
  fill(max, max, max);
  stroke(0, 0, 0);
  rect(414, 290, 70, 110); // Door
  
  fill(139, 69, 19);
  stroke(0, 0, 0);
  ellipse(475, 350, 10, 10); //Doorknob
  
  fill(220);
  stroke(0, 0, 0);
  strokeWeight(1);
  rect(398, 400, 103,580);
  line(398, 490, 501, 490); //Sidewalk
  
  stroke(max, max, max);
  strokeWeight(4);
  
  for(var i = 1; i<390; i +=10){ //Left Fence
    line(i, 443, i, 580); 
  }
  
  line(1, 442, 381, 443);
  line(1,580,381, 580);
  
  for(var j = 517; j<width; j +=10){ //Right Fence
    line(j, 443, j, 580); 
  }
  
  line(517, 443, 967, 443);
  line(517, 578, 966, 580);
  
  //image(img, 0, 0, 150, 150);
  
  
  
}