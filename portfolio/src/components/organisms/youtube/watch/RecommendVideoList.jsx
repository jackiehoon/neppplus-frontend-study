import styled from "styled-components";
import { Link } from "react-router-dom";

import { videoListMain } from "../../../../data/videoList";

const RecommendVideoList = () => {
  return (
    <List>
      {videoListMain.map(
        ({ thumbnail, videoId, channel, title, hit, createAt }) => (
          <Item>
            <Link to={`/youtube/${videoId}`}>
              <Thumbnail src={thumbnail} />
            </Link>
            <Info>
              <Link to={`/youtube/${videoId}`}>
                <Title>{title}</Title>
              </Link>
              <ChannelName>{channel.name}</ChannelName>
              <MetaData>
                조회수 {hit} 회 • {createAt}
              </MetaData>
            </Info>
          </Item>
        )
      )}
    </List>
  );
};

const List = styled.div``;
const Item = styled.article`
  display: flex;
  & + & {
    margin-top: 8px;
  }
`;
const Thumbnail = styled.img`
  height: 94px;
  width: 168px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
const Title = styled.span`
  font-size: 14px;
  margin-bottom: 4px;
  color: #030303;
  font-weight: 500;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
const ChannelName = styled.span`
  color: #606060;
  font-size: 12px;
`;
const MetaData = styled.span`
  color: #606060;
  font-size: 12px;
`;

export default RecommendVideoList;
