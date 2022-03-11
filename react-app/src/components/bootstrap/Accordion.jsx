import { useState } from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    const nextIndex = activeIndex === index ? -1 : index;
    setActiveIndex(nextIndex);
  };

  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id} active={activeIndex === index}>
          <Header onClick={() => handleClick(index)}>
            {title}
            <BtnArrow />
          </Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-width: 800px;
  margin: 20px auto;
`;
const Item = styled.li`
  & + & {
    border-top: 1px solid #ddd;
  }
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        color: #0c63e4;
        background-color: #e7f1ff;
      }
      ${BtnArrow} {
        transform: rotate(-180deg);
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const BtnArrow = styled.button`
  transition: transform 0.5s;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
`;
const Body = styled.div`
  padding: 15px;
  border-top: 1px solid #ddd;
  display: none;
`;

export default Accordion;
