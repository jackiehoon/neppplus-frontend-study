import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

const Naver = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};

export default Naver;
