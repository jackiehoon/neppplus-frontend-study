//   const jsValue = document.getElementById("input-text").value;
//   document.getElementById("input-text").value = "대입했다";
//   $("#input-text").val("대입했다");
$("#form").on("submit", (e) => {
  e.preventDefault();
  const value = $("#input-text").val();
  if (value === "") return;

  const name = $("#input-name").val();

  $.ajax({
    url: "/todo",
    method: "POST",
    data: {
      text: value,
      name: name,
    },
    success: (result) => {
      console.log(result);
      const id = result.id;

      $(".todo-list").append(`
  <li class="todo-item" data-id="${id}">
    <label>
      <input type="checkbox" class="input-check" />
      <span class="todo-text">${value}</span>
    </label>
    <button class="btn-edit">수정</button>
    <button class="btn-delete">삭제</button>
  </li>
`);
    },
  });

  $("#input-text").val("");
  $("#input-text").focus();
});

// 전체삭제
$("#btn-delete-all").click(() => {
  const name = $("#input-name").val();
  const request = {
    url: "/todo",
    method: "DELETE",
    data: {
      name: name,
    },
    success: (result) => {
      $(".todo-list").html("");
    },
  };
  $.ajax(request);
});

// 삭제
$(".todo-list").on("click", ".btn-delete", (e) => {
  const id = $(e.currentTarget).closest(".todo-item").data("id");
  $.ajax({
    url: `/todo/${id}`,
    method: "DELETE",
    success: () => {
      $(e.currentTarget).parent().remove();
    },
  });
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
  const id = $(this).closest(".todo-item").data("id");
  $.ajax({
    url: `/todo/${id}`,
    method: "PATCH",
    data: {
      isDone: checked ? 1 : 0,
    },
    success: () => {
      if (checked) {
        $(this).closest(".todo-item").addClass("done");
      } else {
        $(this).closest(".todo-item").removeClass("done");
      }
    },
  });
});

$(document).on("click", ".btn-edit", function () {
  const text = prompt("수정할 내용을 입력하세요.");
  const id = $(this).closest(".todo-item").data("id");

  $.ajax({
    url: `/todo/${id}`,
    method: "PUT",
    data: {
      text: text,
    },
    success: (result) => {
      console.log(result);
    },
  });

  $(this).parent().find(".todo-text").text(text);
});

$("#btn-check-all").click(() => {
  // 서버: 전체체크 api 실행 (isDone : 1)
  // 클라이언트: 모든 checkbox에 체크,
  //   모든 li에active(done)클래스 추가
});

$("#btn-uncheck-all").click(() => {
  // 서버: 전체체크해제 api 실행 (isDone : 0)
  // 클라이언트: 모든 checkbox에 체크 해제,
  //   모든 li에active(done)클래스 제거
});
