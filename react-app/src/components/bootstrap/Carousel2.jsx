import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [activeIndex]);

  const handleClick = useCallback(
    (n) => {
      if (isAnimating) return;
      const lastIndex = data.length - 1;
      if (n === -1 && activeIndex === 0) {
        setActiveIndex(lastIndex);
      } else if (n === 1 && activeIndex === lastIndex) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + n);
      }
    },
    [isAnimating, activeIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleClick(1);
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [handleClick]);

  return (
    <Wrapper>
      <List index={activeIndex}>
        {data.map(({ id, image }) => (
          <div key={id}>
            <Image src={image} />
          </div>
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
  overflow: hidden;
`;
const List = styled.div`
  display: flex;
  transform: ${({ index }) => `translateX(${-800 * index}px)`};
  transition: transform 1s;
`;
const Image = styled.img`
  width: 800px;
  height: 600px;
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
