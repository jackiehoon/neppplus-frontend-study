import { DropdownWrapper, BtnRight } from "../../../atoms";
import { useState } from "react";

import { ReactComponent as ImgApps } from "../../../../assets/images/youtube-apps.svg";

const DropdownApps = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <DropdownWrapper>
      <BtnRight onClick={() => setIsShow((prev) => !prev)}>
        <ImgApps />
      </BtnRight>
    </DropdownWrapper>
  );
};

export default DropdownApps;
