//   const jsValue = document.getElementById("input-text").value;
//   document.getElementById("input-text").value = "대입했다";
//   $("#input-text").val("대입했다");
$("#form").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-text").val();
  if (value === "") return;

  $(".todo-list").append(`
    <li class="todo-item">
      <label>
        <input type="checkbox" class="input-check" />
        <span class="todo-text">${value}</span>
      </label>
      <button class="btn-edit">수정</button>
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
// 삭제
$(".todo-list").on("click", ".btn-delete", (e) => {
  $(e.currentTarget).parent().remove();
});

// vanilla javascript로 구현
// document.querySelector(".todo-list").addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn-delete")) {
//     e.target.parentNode.remove();
//   }
// });

// 할일체크
$(document).on("change", ".input-check", function () {
  const checked = $(this).prop("checked");

  if (checked) {
    $(this).closest(".todo-item").addClass("done");
  } else {
    $(this).closest(".todo-item").removeClass("done");
  }
});

$(document).on("click", ".btn-edit", function () {
  const text = prompt("수정할 내용을 입력하세요.");
  $(this).parent().find(".todo-text").text(text);
});
