import { useEffect, useState } from "react";
import styled from "styled-components";

const ModalFirst = ({ onClose, onChange, name }) => {
  const [text, setText] = useState(name);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSave = () => {
    onChange(text);
    onClose();
  };

  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Body>
          <h2>이름 바꾸기</h2>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </Body>
        <Footer>
          <BtnClose onClick={onClose}>Close</BtnClose>
          <BtnSave onClick={handleSave}>Confirm</BtnSave>
        </Footer>
      </Container>
    </>
  );
};

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
`;
const Body = styled.div`
  padding: 15px;
`;
const Footer = styled.div``;
const Btn = styled.button`
  border: none;
  background: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  margin: 5px;
`;
const BtnClose = styled(Btn)`
  background: gray;
  color: #fff;
`;
const BtnSave = styled(Btn)`
  background: blue;
  color: #fff;
`;

export default ModalFirst;
