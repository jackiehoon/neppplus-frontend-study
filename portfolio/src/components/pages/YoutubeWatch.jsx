import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Header from "../organisms/youtube/Header";
import Sidebar from "../organisms/youtube/Sidebar";

const YoutubeWatch = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { videoId } = useParams();

  return (
    <>
      <Header toggleSidebar={() => setShowSidebar((prev) => !prev)} />
      {showSidebar && <Sidebar />}
      <VideoWrapper>
        <iframe
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </>
  );
};

const VideoWrapper = styled.div`
  width: 100%;
  padding-top: 56%;
  position: relative;
  iframe {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export default YoutubeWatch;
