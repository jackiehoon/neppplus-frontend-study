import { useState } from "react";
import styled from "styled-components";

import Header from "../organisms/youtube/Header";
import MiniSidebar from "../organisms/youtube/MiniSidebar";
import Sidebar from "../organisms/youtube/Sidebar";
import VideoList from "../organisms/youtube/VideoList";

import { videoListMain } from "../../data/videoList";

const Youtube = () => {
  const [showMini, setShowMini] = useState(false);
  return (
    <>
      <Header toggleSidebar={() => setShowMini((prev) => !prev)} />
      {showMini ? <MiniSidebar /> : <Sidebar />}
      <MainWrapper showMini={showMini}>
        <VideoList data={videoListMain} />
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.main`
  margin-left: ${({ showMini }) => (showMini ? "72px" : "250px")};
`;

export default Youtube;
