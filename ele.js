// ele.js
function drawele() {
  background(255);
  image(eleImg, width / 2, height / 2, width, height); 
  
  fill(255, 0, 0);
  ellipse(width * 0.65, height * 0.45, 60, 60);  
}

function mousePressed() {
  if (currentScreen === "ele") {
    if (dist(mouseX, mouseY, width* 0.65, height * 0.45) < 60) {
      currentScreen = "5f";
      soongX = width*0.75;
      soongY = height*5/6;
    }
  } else if (currentScreen === "5f") {
    
    currentScreen = "zido";
    switchedToEle = false;  
  }
}
