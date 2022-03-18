import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to="/bootstrap">
        <h2>부트스트랩</h2>
      </Link>
      <Link to="/todo">
        <h2>투두리스트(react)</h2>
      </Link>
      <a href="/todo/todo.html">
        <h2>투두리스트(jQuery)</h2>
      </a>
    </>
  );
};

export default Main;
