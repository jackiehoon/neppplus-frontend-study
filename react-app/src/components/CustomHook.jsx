import useInputs from "../hooks/useInputs";

const CustomHook = () => {
  const [form, handleChange] = useInputs({
    userName: "",
    message: "",
    message2: "",
  });
  const { userName, message, message2 } = form;

  const handleClick = () => {
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

export default CustomHook;
