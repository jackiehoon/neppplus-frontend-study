import { useState } from "react";
import "./App.css";
import Info from "./components/Info2";
import Counter3 from "./components/TodoList";

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {/* <button onClick={() => setIsShow(true)}>나오기</button>
      <button onClick={() => setIsShow(false)}>숨기기</button>
      {isShow && <Info />} */}
      <Counter3 />
    </>
  );
}

export default App;
