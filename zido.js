// zido.js

let speed = 5;


function drawzido() {
  image(bg, width / 2, height / 2, width, height);
  

  textSize(15)
  text('정보과학관을 어떻게 가야하지?',soongX,soongY + 30);
  move();

  image(character,soongX,soongY,soong.width/7,soong.height/7);
  
 
  
  if(dist(soongX, soongY, width * 0.8, height / 2) < 15 && !switchedToEle) {
    currentScreen = "ele";
    switchedToEle = true;
  }

}