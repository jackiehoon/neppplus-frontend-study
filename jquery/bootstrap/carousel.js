let index = 1;

const handleActiveItem = () => {
  $(".carousel-item").removeClass("active");
  $(".carousel-item:nth-child(" + index + ")").addClass("active");

  $(".button-list button").removeClass("active");
  $(`.button-list li:nth-child(${index}) button`).addClass("active");
};

$(".btn-next").click(() => {
  // 다음버튼을 누를 때
  // 1) index가 item갯수랑 같으면 index를 1으로
  // 2) 그렇지 않으면 index 1증가
  const itemLength = $(".carousel-list").children().length;
  index = index === itemLength ? 1 : index + 1;
  handleActiveItem();
});

$(".btn-prev").click(() => {
  // 이전버튼을 누를 때
  // 1) index가 1이면 index를 item갯수로
  // 2) 그렇지 않으면 index 1감소

  const itemLength = $(".carousel-list").children().length;
  index = index === 1 ? itemLength : index - 1;
  handleActiveItem();
});

$(".button-list button").click(function () {
  index = +this.innerText;
  handleActiveItem();
});
