// 5f.js


function draw5f() {
  background(255);
  image(f5img, width / 2, height / 2, width, height); 
  image(character,soongX,soongY,soong.width/7,soong.height/7)
  move();
  if (
  (
    (soongX < width * 3 / 8 + 200 && soongY < height / 2 + 175) &&
    !(keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW))
  ) ||
  (
    (soongX > width * 0.8 - 35 && soongY < height * 0.6 + 100) &&
    !(keyIsDown(LEFT_ARROW) || keyIsDown(DOWN_ARROW))
  )
) {
  speed = 0;
} else {
  speed = 4;
  
  if(!soongguide) {
    fill(255);
    rect(width*0.85,height*0.4,100,190)
  }
}

  
  if(dist(soongX,soongY,width*0.8,height/2)< 40) {
   currentScreen = "timer" } }