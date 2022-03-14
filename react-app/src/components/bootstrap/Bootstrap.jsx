import styled from "styled-components";

import Accordion from "./Accordion";
import Accordion2 from "./Accordion2";
import { accordionData, carouselData } from "../../datas/bootstrap";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import ModalFirst from "./ModalFirst";
import { useState } from "react";
import ModalNickName from "./ModalNickName";

const Bootstrap = () => {
  const [showModalFirst, setShowModalFisrt] = useState(false);
  const [showModalNickName, setShowModalNickName] = useState(false);
  const [name, setName] = useState("홍길동");
  const [nickName, setNickName] = useState("별명");

  const onClose = () => {
    setShowModalFisrt(false);
  };

  const onChange = (text) => setName(text);

  return (
    <>
      <Accordion data={accordionData} />
      <Accordion2 data={accordionData} />
      <h2>
        이름 : {name}
        <Button onClick={() => setShowModalFisrt(true)}>이름바꾸기</Button>
      </h2>
      <h2>
        닉네임 : {nickName}
        <Button onClick={() => setShowModalNickName(true)}>닉네임바꾸기</Button>
      </h2>
      <Dropdown />
      <Carousel data={carouselData} />
      <Carousel2 data={carouselData} />

      {showModalFirst && (
        <ModalFirst name={name} onClose={onClose} onChange={onChange} />
      )}
      {showModalNickName && (
        <ModalNickName
          nickName={nickName}
          onClose={() => setShowModalNickName(false)}
          onChange={(text) => setNickName(text)}
        />
      )}
    </>
  );
};

const Button = styled.button``;

export default Bootstrap;
