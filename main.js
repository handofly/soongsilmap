// main.js
let currentScreen = "zido";
let eleImg, f5img, soongtalk;
let switchedToEle = false;
let switchedTosoongtalk = false;


function preload() {
  bg = loadImage('zido.jpg');
  soong = loadImage('soong.jpg');  
  eleImg = loadImage('ele.jpg');
  f5img = loadImage('5f.jpg');
  soongtalk = loadImage('soongtalk.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(80);
}

function draw() {
  if (currentScreen === "zido") {
    drawzido();
  } else if (currentScreen === "ele") {
    drawele();
  } else if (currentScreen === "5f") {
    draw5f();
  } else if (currentScreen === "timer") {
    drawTimer();
  } else if (currentScreen === "soongtalk" && switchedTosoongtalk) {
    drawSoongtalk();
  } 
  
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
  }
}
