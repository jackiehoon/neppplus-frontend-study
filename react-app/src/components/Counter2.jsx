import { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(7);

  const handleChange = (n) => {
    setNumber(number + n);
  };

  return (
    <>
      <h1>현재 카운터 값은 {number}입니다.</h1>
      <button onClick={() => handleChange(5)}>+5</button>
      <button onClick={() => handleChange(1)}>+1</button>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={() => handleChange(-3)}>-3</button>
    </>
  );
};

export default Counter2;
