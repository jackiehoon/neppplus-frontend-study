// let a = 3;
// let b = 5;

// // a에 담긴  값과 b에 담긴 값을 교환
// let c = b;
// b = a;
// a = c;

// console.log(a, b);

// 버블 정렬

// console.log([112, 5, 3, 2].sort((a, b) => a - b));

// 두 숫자를 비교해서 큰 숫자를 뒤로 보낸다.
const bubble = (arr) => {
  const result = [...arr];

  for (let j = 1; j < result.length; j++) {
    for (let i = 0; i < result.length - j; i++) {
      if (result[i] > result[i + 1]) {
        let c = result[i + 1];
        result[i + 1] = result[i];
        result[i] = c;
      }
    }
  }

  //   1. result[0]과 result[1] 비교해서
  //      result[0]이 더 크면 두 값 자리바꾸기
  //   2. result[1]과 result[2] 비교해서
  //      result[1]이 더 크면 두 값 자리바꾸기
  //   3. result[2]과 result[3] 비교해서
  //      result[2]이 더 크면 두 값 자리바꾸기
  //   4. result[3]과 result[4] 비교해서
  //      result[3]이 더 크면 두 값 자리바꾸기
  //  .....
  return result;
};
const arr1 = [2, 43, 23, 74, 24, 546, 75, 1];
console.log(bubble(arr1));

// 선택 정렬
const select = (arr) => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        const c = result[i];
        result[i] = result[j];
        result[j] = c;
      }
    }
  }

  return result;
};

console.log(select(arr1));

// 1) 1번 요소와 2번요소 비교
//    2번이 더작으면 자리바꾸기
// 2) 1번요소와 3번요소 비교
//    3번이 더 작으면 자리바꾸기
// 3) 1번요소와 4번요소 비교
//    4번이 더 작으면 자리바꾸기
// .....
// 1) 2번요소와 3번요소 비교
//    3번이 더 작으면 자리바꾸기
// 2) 2번요소와 4번요소 비교
//    4번이 더작으면 자리바꾸기
