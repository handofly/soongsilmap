// main.js
let currentScreen = "start";
let start, bg, soong, map2, ending;
let eleImg, f5img, soongtalk;
let switchedToEle = false;
let switchedTosoongtalk = false;
let switchedToEnding = false;
let soongguide = false;
let soongX , soongY;
let character;
let y;




function preload() {
  start = loadImage('start.jpg');
  bg = loadImage('zido.jpg');
  soong = loadImage('soong.jpg');  
  soongback = loadImage('soongback.jpg');
  eleImg = loadImage('ele.jpg');
  f5img = loadImage('5f.jpg');
  soongtalk = loadImage('soongtalk.jpg');
  map2 = loadImage('map2.jpg');
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(80);
  soongX = width/4;
  soongY = height * 5/6;
  character = soongback;
  y = height + 100;
}

function draw() {
  if (currentScreen === "start") {
    drawStart();
  } else if (currentScreen === "zido") {
    drawzido();
  } else if (currentScreen === "ele") {
    drawele();
  } else if (currentScreen === "5f") {
    draw5f();
  } else if (currentScreen === "timer") {
    drawTimer();
  } else if (currentScreen === "soongtalk" && switchedTosoongtalk) {
    drawSoongtalk();
  }  else if (currentScreen === "map2") {
    drawMap2();
  }  else if (currentScreen === "ending") {
    drawending();
  } 
  
  
   if (keyIsDown(UP_ARROW))  character = soongback
  if (keyIsDown(DOWN_ARROW)) character = soong
  
}

function move() {
  if (keyIsDown(LEFT_ARROW))  soongX -= speed
  if (keyIsDown(RIGHT_ARROW)) soongX += speed
  if (keyIsDown(UP_ARROW))    soongY -= speed
  if (keyIsDown(DOWN_ARROW))  soongY += speed
}




function guide() {
  if (keyIsDown(83) && !switchedTosoongtalk) {
    currentScreen = "soongtalk";
    switchedTosoongtalk = true;
    switchedToEnding = true;
  }
}

function mousePressed() {
  if (currentScreen === "ele") {
    if (dist(mouseX, mouseY, width* 0.55, height * 0.25) < 60) {
      currentScreen = "5f";
      soongX = width*0.75;
      soongY = height*5/6;
      switchedToEle = false;
      switchedToEnding = false;
    }
  } 
 
   else if (currentScreen === "soongtalk") {
    
    if (dist(mouseX, mouseY, width*0.3, height*0.8) < 80) {
      currentScreen = "map2";
      soongguide = true;
    }
  } 
     else if (currentScreen === "start") {
    
    if (dist(mouseX, mouseY, width*0.7, height*0.6) < 50) {
      currentScreen = "zido";
    }
  } 
}

let progress = 0;


function drawline(x1, y1, x2, y2) {
  if (progress <= 1) {
    let nowX = lerp(x1, x2, progress);
    let nowY = lerp(y1, y2, progress);
    line(x1, y1, nowX, nowY);
    progress += 0.01; 
  } else if (progress === 1) {
    line(x1,y1,x2,y2)
    
  }
}