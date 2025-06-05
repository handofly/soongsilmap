// drawTimer 지각
let startTime1 = 0;
let showClock1 = true;
const fixedHour = 9;
const fixedMinute = 3;

// drawTimer2 온타임
let startTime2 = 0;
let showClock2 = true;

function initTimer1() {
  startTime1 = millis();
  showClock1 = true;
}

function initTimer2() {
  startTime2 = millis();
  showClock2 = true;
}

function drawTimer() {
  background(0);

  if (showClock1) {
    if (startTime1 === 0) {
      initTimer1();
    }

    let elapsedSeconds = floor((millis() - startTime1) / 1000);

    if (elapsedSeconds >= 3) {
      showClock1 = false;
      startTime1 = 0;
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
    textAlign(CENTER, CENTER);
    textSize(100);
    text("지각!", width / 2, height / 2 - 50);
    textSize(40);
    text("G키를 누르세요", width / 2, height / 2 + 50);
  }

  guide();
}

function drawTimer2() {
  background(0);

  if (showClock2) {
    if (startTime2 === 0) {
      initTimer2();
    }

    let elapsedSeconds = floor((millis() - startTime2) / 1000);

    if (elapsedSeconds >= 5) {
      showClock2 = false;
      startTime2 = 0;
      return;
    }

    let h = nf(8, 2);
    let m = nf(56, 2);
    let s = nf(elapsedSeconds, 2);
    let timeStr = `${h}:${m}:${s}`;

    fill(255, 0, 0);
    textSize(80);
    textAlign(CENTER, CENTER);
    text(timeStr, width / 2, height / 2);
  } else {
    fill(0, 255, 0);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("온타임!", width / 2, height / 2 - 50);
    textSize(40);
    text("E키를 누르세요", width / 2, height / 2 + 50);
  }
  
  guide();

}
