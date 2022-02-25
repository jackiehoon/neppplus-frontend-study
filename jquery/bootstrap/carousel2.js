let index = 0;

$(".btn-next").click(() => {
  const itemLength = $(".carousel-list").children().length;
  // 다음버튼을 누를 때
  // 1) index가 item갯수랑 같으면 index를 1으로
  // 2) 그렇지 않으면 index 1증가
  index = index === itemLength - 1 ? 0 : index + 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});

$(".btn-prev").click(() => {
  const itemLength = $(".carousel-list").children().length;
  // 이전버튼을 누를 때
  // 1) index가 1이면 index를 item갯수로
  // 2) 그렇지 않으면 index 1감소
  index = index === 0 ? itemLength - 1 : index - 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});

$(".button-list button").click(function () {
  index = this.innerText - 1;
  $(".carousel-list").css("transform", `translateX(-${index * 800}px)`);
});
