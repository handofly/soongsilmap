// zido.js
let soongX = 200;
let soongY = 500;
let speed = 5;
let bg, soong;

function drawzido() {
  background(255);
  image(bg, width / 2, height / 2, width, height);

  textSize(15)
  text('정보과학관을 어떻게 가야하지?',soongX,soongY + 30);
  move();

  image(soong, soongX, soongY, soong.width / 15, soong.height / 15);
  
  fill(0, 255, 0);
  ellipse(width * 0.46, height * 0.4, 70, 70); 
  
  fill(255,0,0);
  ellipse(width * 0.8,height / 2,30,30);
  
  if(dist(soongX, soongY, width * 0.8, height / 2) < 15 && !switchedToEle) {
    currentScreen = "ele";
    switchedToEle = true;
  }
}
