import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  let name = "react";
  const handleClick = () => {
    setNumber(number + 1);
    name = "vue";
    console.log(name);
  };

  return (
    <div style={{ margin: 100 }}>
      {name}
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default Counter;
