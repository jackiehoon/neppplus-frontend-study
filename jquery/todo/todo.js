//   const jsValue = document.getElementById("input-text").value;
//   document.getElementById("input-text").value = "대입했다";
//   $("#input-text").val("대입했다");
$("#form").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-text").val();
  if (value === "") return;

  $(".todo-list").append(`
    <li>
      <label>
        <input type="checkbox" />${value}
      </label>
      <button class="btn-delete">삭제</button>
    </li>
`);

  $("#input-text").val("");
  $("#input-text").focus();
});

// 전체삭제
$("#btn-delete-all").click(() => {
  $(".todo-list").html("");
});

$(".todo-list").on("click", ".btn-delete", (e) => {
  $(e.currentTarget).parent().remove();
});

// vanilla javascript로 구현
// document.querySelector(".todo-list").addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn-delete")) {
//     e.target.parentNode.remove();
//   }
// });
