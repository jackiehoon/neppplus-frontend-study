import { useState } from "react";
const EventPractice = () => {
  // 목표: 버튼을 누르면 input에 입력된 값을 alert
  // 1. input value가 바뀔 때 마다 그 값을 useState변수에 저장
  // 2. 확인버튼 누르면 useState변수 alert

  //   const [userName, setUserName] = useState("");
  //   const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    userName: "",
    message: "",
    message2: "",
  });

  const { userName, message, message2 } = form;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleClick = () => {
    // message input에 입력된 값도 alert하기
    alert(userName + ": " + message + ": " + message2);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input onChange={handleChange} placeholder="사용자명" name="userName" />
      <input
        onChange={handleChange}
        placeholder="아무거나 입력해 보세요"
        name="message"
        onKeyPress={handleKeyPress}
      />
      <input
        onChange={handleChange}
        placeholder="아무거나 입력해 보세요"
        name="message2"
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
