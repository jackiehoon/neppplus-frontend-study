import { useState } from "react";
import styled from "styled-components";

const ModalNickName = ({ onClose, onChange, nickName }) => {
  const [text, setText] = useState(nickName);

  const handleChange = () => {
    onChange(text);
    onClose();
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Body>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </Body>
        <Footer>
          <BtnSave onClick={handleChange}>Save</BtnSave>
        </Footer>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;
const Container = styled.div`
  background: #fff;
  min-width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Body = styled.div``;
const Footer = styled.div``;
const BtnSave = styled.button``;

export default ModalNickName;
