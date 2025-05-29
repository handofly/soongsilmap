// 5f.js


function draw5f() {
  background(255);
  image(f5img, width / 2, height / 2, width, height); 
  image(soong, soongX, soongY, soong.width / 7, soong.height / 7);
  move();
  
  if(soongX < width*3/8 + 200 && soongY <height/2 + 175) {
     if (
        (keyIsDown(RIGHT_ARROW)) ||  
        (keyIsDown(DOWN_ARROW))    
      ) {
        speed = 4;
      } else {
        speed = 0;
      }
    } else {
      speed = 4;
    }
  
  if(dist(soongX,soongY,width*0.8,height/2)< 40) {
    currentScreen = "timer";
  }
}
