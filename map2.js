//map2.js

function drawMap2 () {
  background(255);
  image(map2, width/2, height/2, width, height);
  
   move();
  image(soong, soongX, soongY, soong.width / 7, soong.height / 7);
  
  
  
  if(dist(soongX, soongY, width * 0.8, height / 2) < 30 && switchedToEnding) {
    currentScreen = "ending";
  }
}