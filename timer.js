let startTime = 0;
let showClock = true;
const fixedHour = 9;
const fixedMinute = 3;

function initTimer() {
  startTime = millis();
  showClock = true;
}

function drawTimer() {
  background(0);

  if (showClock) {
    if (startTime === 0) {
      initTimer();
    }
    
    let elapsedSeconds = floor((millis() - startTime) / 1000);

    if (elapsedSeconds >= 5) {
      showClock = false;
      return;
    }

    let h = nf(fixedHour, 2);
    let m = nf(fixedMinute, 2);
    let s = nf(elapsedSeconds, 2);

    let timeStr = `${h}:${m}:${s}`;

    fill(255, 0, 0);
    textSize(80);
    textAlign(CENTER, CENTER);
    text(timeStr, width / 2, height / 2);
  } else {
    fill(255);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("지각! S키를 누르세요", width / 2, height / 2);
  }
  guide();
}


