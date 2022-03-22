import styled from "styled-components";
import { Link } from "react-router-dom";

const VideoList = ({ data }) => {
  return (
    <List>
      {data.map(({ id, thumbnail, channel, title, hit, createAt, videoId }) => (
        <Item key={id}>
          <Link to={`/youtube/${videoId}`}>
            <Thumbnail src={thumbnail} />
          </Link>
          <InfoWrapper>
            <ChannelImage src={channel.thumbnail} />
            <Info>
              <Link to={`/youtube/${videoId}`}>
                <VideoTitle>{title}</VideoTitle>
              </Link>
              <ChannelName>{channel.name}</ChannelName>
              <MetaData>
                조회수 {hit} 회 • {createAt}
              </MetaData>
            </Info>
          </InfoWrapper>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  padding: 16px;
  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Item = styled.article``;
const Thumbnail = styled.img`
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 12px;
`;
const ChannelImage = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-right: 12px;
`;
const Info = styled.div``;
const VideoTitle = styled.h5`
  margin: 0;
  margin-bottom: 10px;
  color: #030303;
  font-weight: 500;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
const ChannelName = styled.div`
  font-size: 12px;
  color: #606060;
`;
const MetaData = styled.span`
  font-size: 12px;
  color: #606060;
`;

export default VideoList;
