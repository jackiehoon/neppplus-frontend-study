import styled from "styled-components";
import buttonList from "../../../../data/videoActionButtonList";

const VideoActions = () => {
  return (
    <List>
      {buttonList.map(({ image, name }) => (
        <Button key={name}>
          <SVGWrapper>{image}</SVGWrapper>
          {name}
        </Button>
      ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
`;
const Button = styled.button`
  background: none;
  border: none;
  color: #030303;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SVGWrapper = styled.div`
  width: 24px;
  height: 24px;
  padding: 6px;
`;
const BtnMore = styled.button``;

export default VideoActions;
