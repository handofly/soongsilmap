let endingending = false;

function drawending() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);

  if (!endingending) {
    let credits = [
      "The End",
      "",
      "AI 사용(10%) : 지각 화면에서 Timer 함수 사용 시 ChatGPT 사용",
      "",
      "소감",
      "",
      "김미르: 새내기로서 느꼈던 불편함을 주제로 삼아 프로젝트를 제작해보았는데,",
      "진행 하면서 내년에 들어오는 새내기들에게 이 영상을 보여주면 좋겠다고 생각했습니다.",
      "",
      "이채린: 수업 시간에 배운 내용을 이용하여 팀원들과 협력하여",
      "하나의 주제가 담긴 프로젝트를 제작해 보는 기회가 되었던 것 같아서 뿌듯했습니다.",
      "개발보다 디자인에 더 자신이 있었는데 디자인 분야에 도움을 줄 수 있어서 좋았고,",
      "이번 프로젝트를 통해 개발 분야로나 디자인 분야로 발전할 수 있었던 것 같습니다.",
      "",
      "한도현: 숭실대 지도를 제작하면서 코딩에 대해 더 잘 이해할 수 있었습니다.",
      "그리고 팀원들과 협력 과정에서 코드 구현을 주로 맡으면서 도움을 줄 수 있어 좋았습니다.",
      "",
      "이 프로젝트가 누군가에겐 작은 도움이 되길 바랍니다."
    ];

    let lineHeight = 30;
    let totalHeight = credits.length * lineHeight;

    for (let i = 0; i < credits.length; i++) {
      let textY = y + i * lineHeight - totalHeight / 2;
      text(credits[i], width / 2, textY);
    }

    y -= 1;

    if (y + totalHeight / 2 < 0) {
      endingending = true;
    }
  } else {
    background(0);
    fill(255);
    textAlign(LEFT, TOP);
    textSize(18);

    let explanation = [
      "preload() 함수를 통해 직접 그린 이미지를 다운받았습니다",
      "millis() 함수를 통해 프로그램 시작 후 지난 시간을 밀리초(ms)로 반환하였습니다",
      "",
      "move - 신입생 캐릭터가 움직이는 함수를 만들었습니다",
      "guide - 슝슝이 가이드 화면을 띄우고 다른 화면의 설정들이 바뀌게 함수를 만들었습니다",
      "drawline - 지도 장면에서 선을 천천히 그리게 하는 함수를 만들었습니다.",
      "drawTimer - 지각 타이머 화면을 출력해주는 함수를 분류하였습니다.",
      "",
      "drawzido",
      "drawele",
      "draw5f",
      "drawSoongtalk",
      "drawMap2",
      "drawending - js파일을 여러개로 분류하여 각 함수가 시행될 때 원하는 화면을 띄우게 하였습니다"
    ];

    let lineHeight = 25;
    for (let i = 0; i < explanation.length; i++) {
      text(explanation[i], 50, 50 + i * lineHeight);
    }
  }
}
