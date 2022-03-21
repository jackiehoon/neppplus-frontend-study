import styled from "styled-components";
import { firstList } from "../../../../data/sidebar";
import SidebarItem from "../../../molcules/youtube/SidebarItem";
import { DropdownWrapper, BtnRight } from "../../../atoms";
import { useState } from "react";

import { ReactComponent as ImgCamera } from "../../../../assets/images/camera.svg";
import useDropdownClickBody from "../../../../hooks/useDropdownClickBody";

const DropdownCamera = () => {
  const [isShow, setIsShow] = useState(false);
  const element = useDropdownClickBody(() => setIsShow(false));

  return (
    <DropdownWrapper>
      <BtnRight ref={element} onClick={() => setIsShow((prev) => !prev)}>
        <ImgCamera />
      </BtnRight>
      {isShow && (
        <List>
          {firstList.map(({ icon, name }) => (
            <SidebarItem key={name} name={name} icon={icon} />
          ))}
        </List>
      )}
    </DropdownWrapper>
  );
};

const List = styled.div`
  background: #fff;
  width: 230px;
  position: absolute;
`;

export default DropdownCamera;
