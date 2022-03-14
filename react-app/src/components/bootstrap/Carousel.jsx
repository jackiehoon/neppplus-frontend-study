import { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (n) => {
    const lastIndex = data.length - 1;
    if (n === -1 && activeIndex === 0) {
      setActiveIndex(lastIndex);
    } else if (n === 1 && activeIndex === lastIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + n);
    }
  };

  return (
    <Wrapper>
      <List>
        {data.map(({ id, image }, index) => (
          <Image key={id} src={image} active={activeIndex === index} />
        ))}
      </List>
      <BtnPrev onClick={() => handleClick(-1)}>이전</BtnPrev>
      <BtnNext onClick={() => handleClick(1)}>다음</BtnNext>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
`;
const List = styled.div``;
const Image = styled.img`
  width: 800px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;
const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: #fff;
  border: none;
`;
const BtnPrev = styled(Btn)`
  left: 30px;
`;
const BtnNext = styled(Btn)`
  right: 30px;
`;

export default Carousel;
