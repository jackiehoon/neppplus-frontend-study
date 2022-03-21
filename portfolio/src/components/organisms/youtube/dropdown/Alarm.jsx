import { DropdownWrapper, BtnRight } from "../../../atoms";
import { useState } from "react";

import { ReactComponent as ImgBell } from "../../../../assets/images/bell.svg";

const DropdownAlarm = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <DropdownWrapper>
      <BtnRight onClick={() => setIsShow((prev) => !prev)}>
        <ImgBell />
      </BtnRight>
    </DropdownWrapper>
  );
};

export default DropdownAlarm;
