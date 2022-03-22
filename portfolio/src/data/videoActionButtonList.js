import { ReactComponent as ImgLike } from "../assets/images/like.svg";
import { ReactComponent as ImgClip } from "../assets/images/clip.svg";
import { ReactComponent as ImgDislike } from "../assets/images/dislike.svg";
import { ReactComponent as ImgSave } from "../assets/images/save.svg";
import { ReactComponent as ImgShare } from "../assets/images/share.svg";
import { ReactComponent as ImgMore } from "../assets/images/more.svg";

const buttonList = [
  {
    image: <ImgLike />,
    name: "8.1천",
  },
  {
    image: <ImgDislike />,
    name: "싫어요",
  },
  {
    image: <ImgShare />,
    name: "공유",
  },
  {
    image: <ImgClip />,
    name: "클립",
  },
  {
    image: <ImgSave />,
    name: "저장",
  },
  {
    image: <ImgMore />,
    name: "",
  },
];

export default buttonList;
