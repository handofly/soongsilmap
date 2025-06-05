//start.js

function drawStart() {
  image(start, width / 2, height / 2, width, height);
  fill(0,0,225);
  ellipse(width * 0.7, height* 0.6, 80,80);
  fill(0);
  textSize(20);
  text('START',width * 0.7,height * 0.6);
}