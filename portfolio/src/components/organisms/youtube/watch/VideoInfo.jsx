import styled from "styled-components";

import VideoActions from "./VideoActions";

const VideoInfo = ({ video }) => {
  const { title, hit } = video;
  return (
    <Wrapper>
      <HashTagList>
        <HashTag>#니켈거래중지</HashTag>
        <HashTag>#빅쇼트</HashTag>
      </HashTagList>
      <Title>{title}</Title>
      <DescriptionWrapper>
        <Metadata>
          <Hits>조회수 {hit}회</Hits>
          <Date>2022. 3. 21.</Date>
          <Description>
            0:00 ~ 4:43 초유의 니켈 곱버스 ETN 거래중지…
          </Description>
        </Metadata>
        <VideoActions />
      </DescriptionWrapper>
      <DescriptionWrapper>
        <Channel></Channel>
        <Comments></Comments>
      </DescriptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;
const HashTagList = styled.div``;
const HashTag = styled.span`
  color: #065fd4;
  font-size: 12px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Metadata = styled.div``;
const Hits = styled.span``;
const Date = styled.span``;
const Description = styled.span``;
const Channel = styled.div`
  margin: 12px;
  padding-left: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 1;
`;
const Comments = styled.div`
  flex: 1;
`;
export default VideoInfo;
