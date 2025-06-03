// ele.js

let message = "Art & Tectnology 장소는 508호야" ;
let currenttext = 0;

function drawele() {
  background(255);
  image(eleImg, width / 2, height / 2, width, height); 
  
  noStroke()
  fill(255, 0, 0);
  ellipse(width * 0.55 , height*0.25, 60, 60);  
  
  if(!soongguide) {
    fill(255);
    rect(0,0,width*0.45 ,height);
  } else {
    fill(0)
    textSize(20);
     let texting = message.substring(0, currenttext);
  text(texting, width/4, height * 0.8);

  if (currenttext < message.length) {
    currenttext += 0.1;
  }
  }
}

