// 1부터10 사이의 랜덤숫자를 콘솔에 찍어보세요
// // 0이상 1미만 소수
// Math.random();
// // 0이상 10미만 소수
// Math.random() * 10;
// // 0부터 9까지 정수
// Math.floor(Math.random() * 10);
// // 1 ~ 10 정수 ?
// Math.floor(Math.random() * 10) + 1;

const getRandomNumber = () => Math.floor(Math.random() * 45) + 1;

const recommend = () => {
  const numberList = [];

  // 1. numberList에 랜덤숫자 넣기
  // 2. 1번을 6번하기
  for (let i = 0; i < 6; i++) {
    // 0. 랜덤숫자 생성
    // 1. 중복체크 : numberList에 생성한 숫자가 존재하는지?
    // 2-1. 중복이 안 된 숫자면 : numberList 배열에 추가
    // 2-2. numberList에 이미 존재하는 숫자면 0단계로 돌아가기

    // 1 ~ 45 정수
    let randomNumber = getRandomNumber();

    // 중복체크
    while (numberList.includes(randomNumber)) {
      // 랜덤숫자 다시만들기
      randomNumber = getRandomNumber();
    }

    numberList.push(randomNumber);
  }

  numberList.sort((a, b) => a - b);

  // $lottoNumberList에
  // numberList 배열 안에 있는 숫자 순서대로 출력하기
  const $lottoNumberList = document.querySelectorAll(".lotto-number");
  for (let i = 0; i < $lottoNumberList.length; i++) {
    $lottoNumberList[i].innerText = numberList[i];

    // numberList[i] 값에 따라서 class 붙이기
    let colorClass = "";
    if (numberList[i] <= 10) {
      colorClass = "yellow";
    } else if (numberList[i] <= 20) {
      colorClass = "blue";
    } else if (numberList[i] <= 30) {
      colorClass = "red";
    } else if (numberList[i] <= 40) {
      colorClass = "gray";
    } else {
      colorClass = "green";
    }
    $lottoNumberList[i].classList = "lotto-number";
    $lottoNumberList[i].classList.add(colorClass);
  }
};

const printBall = (target, number) => {
  target.innerText = number;
  // numberList[i] 값에 따라서 class 붙이기
  let colorClass = "";
  if (number <= 10) {
    colorClass = "yellow";
  } else if (number <= 20) {
    colorClass = "blue";
  } else if (number <= 30) {
    colorClass = "red";
  } else if (number <= 40) {
    colorClass = "gray";
  } else {
    colorClass = "green";
  }
  target.classList = "lotto-number";
  target.classList.add(colorClass);
};

const recommend2 = () => {
  //  중복없는, 정렬된 배열 만들기
  const numberList = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandomNumber();
    while (numberList.includes(randomNumber)) {
      randomNumber = getRandomNumber();
    }
    numberList.push(randomNumber);
  }
  numberList.sort((a, b) => a - b);

  const $lottoNumberList = document.querySelectorAll(".lotto-number");
  for (let i = 0; i < $lottoNumberList.length; i++) {
    // 0.1초마다 랜덤숫자 출력
    const intervalId = setInterval(() => {
      const number = getRandomNumber();
      printBall($lottoNumberList[i], number);
    }, 100);

    // i*1초마다 배열의 숫자 출력
    setTimeout(() => {
      // 0.1초 랜덤출력 멈추기
      clearInterval(intervalId);
      printBall($lottoNumberList[i], numberList[i]);
    }, i * 1000);
  }
};

// 버튼 누를때마다 번호 추천해주기
document.querySelector("#btn-start").addEventListener("click", recommend2);

// recommend();
