import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>안녕하세요~</h1>
      <h2>자기소개서</h2>
      <Link to="/youtube">
        <h3>유튜브</h3>
      </Link>
      <Link to="/insta/login">
        <h3>인스타그램</h3>
      </Link>
    </>
  );
};

export default Main;
