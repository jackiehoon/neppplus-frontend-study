import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Header from "../organisms/youtube/Header";
import Sidebar from "../organisms/youtube/Sidebar";
import VideoInfo from "../organisms/youtube/watch/VideoInfo";
import CommentList from "../organisms/youtube/watch/CommentList";
import RecommendVideoList from "../organisms/youtube/watch/RecommendVideoList";

import { videoListMain } from "../../data/videoList";

const YoutubeWatch = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { videoId } = useParams();

  const video = videoListMain.find((video) => video.videoId === videoId);

  return (
    <>
      <Header toggleSidebar={() => setShowSidebar((prev) => !prev)} />
      {showSidebar && <Sidebar />}
      <PageWrapper>
        <Main>
          <VideoWrapper>
            <iframe
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
          <VideoInfo video={video} />
          <CommentList />
        </Main>
        <Aside>
          <RecommendVideoList mode={"recommend"} />
        </Aside>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  display: flex;
  margin: 24px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Main = styled.main`
  flex: 1;
  margin-right: 24px;
  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;
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

const Aside = styled.aside`
  width: 400px;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export default YoutubeWatch;
