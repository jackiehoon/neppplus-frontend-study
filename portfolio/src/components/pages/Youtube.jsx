import { useState } from "react";
import Header from "../organisms/youtube/Header";
import MiniSidebar from "../organisms/youtube/MiniSidebar";
import Sidebar from "../organisms/youtube/Sidebar";

const Youtube = () => {
  const [showMini, setShowMini] = useState(false);
  return (
    <>
      <Header toggleSidebar={() => setShowMini((prev) => !prev)} />
      {showMini ? <MiniSidebar /> : <Sidebar />}
    </>
  );
};

export default Youtube;
