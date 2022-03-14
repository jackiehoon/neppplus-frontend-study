import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isShow, setShow] = useState(true);
  const buttonEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (e.target !== buttonEl.current) setShow(false);
    };
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <Wrapper>
      <Button ref={buttonEl} onClick={() => setShow(!isShow)}>
        Dropdown Button
      </Button>
      {isShow && (
        <List>
          <Item>Action</Item>
          <Item>Another Action</Item>
          <Item>Something else</Item>
        </List>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;
const Button = styled.button``;
const List = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
const Item = styled.li`
  padding: 5px 15px;
  & + & {
    border-top: 1px solid #ddd;
  }
`;

export default Dropdown;
