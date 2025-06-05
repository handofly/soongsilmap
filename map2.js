let done = false;
let done2 = false;
let ttt = 0;

function drawMap2 () {
  image(map2, width/2, height/2, width, height);
  image(character,soongX,soongY,soong.width/7,soong.height/7)
  stroke(225,0,0);
  if (!done) {
    drawline(width/4, height*0.8, width*0.55, height*0.8);
    ttt += 1;
    if (ttt > 100) {
      done = true;
      progress = 0;  
    }
  } else {
    line(width/4, height*0.8, width*0.55, height*0.8);

  if (!done2) {
      drawline(width*0.55, height*0.8, width*0.81, height*0.42);
      if (progress >= 1) {
        done2 = true;
      }
    } else {
      
      line(width*0.55, height*0.8, width*0.81, height*0.42);
    }
  }
move();
  textSize(15)
  text('아 길이 이렇게 되어있구나!',soongX,soongY + 50);
  move();
  
  
  if (dist(soongX, soongY, width * 0.8, height / 2) < 30 && switchedToEnding) {
    currentScreen = "ele";
  }
}
