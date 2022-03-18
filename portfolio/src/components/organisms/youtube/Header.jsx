import styled from "styled-components";
import { ReactComponent as Hamburger } from "../../../assets/images/hamburger.svg";
import { ReactComponent as YoutubeLogo } from "../../../assets/images/youtube.svg";
import { ReactComponent as ImgCamera } from "../../../assets/images/camera.svg";
import { ReactComponent as ImgApps } from "../../../assets/images/youtube-apps.svg";
import { ReactComponent as ImgBell } from "../../../assets/images/bell.svg";
import { ReactComponent as ImgSearch } from "../../../assets/images/search.svg";
import { ReactComponent as ImgMic } from "../../../assets/images/mic.svg";

const YoutubeHeader = ({ toggleSidebar }) => {
  return (
    <Header>
      <Left>
        <span onClick={toggleSidebar}>
          <Hamburger />
        </span>
        <YoutubeLogo style={{ padding: 15, width: 90 }} />
      </Left>
      <Center>
        <SearchInputWrapper>
          <SearchInput placeholder="검색" />
          <BtnKeyboard />
        </SearchInputWrapper>
        <BtnSearch>
          <ImgSearch />
        </BtnSearch>
        <BtnMic>
          <ImgMic />
        </BtnMic>
      </Center>
      <Right>
        <BtnRight>
          <ImgCamera />
        </BtnRight>
        <BtnRight>
          <ImgApps />
        </BtnRight>
        <BtnRight>
          <ImgBell />
        </BtnRight>
        <BtnProfile>
          <ImgProfile src="https://yt3.ggpht.com/3SshyAt2hdIsA4v1VpRKwmvCSr8Uw0k0HQyERY899L_vAL86hddK3XFOEgEee1rRk0O-Y0qVJw=s88-c-k-c0x00ffffff-no-rj-mo" />
        </BtnProfile>
      </Right>
    </Header>
  );
};

const Header = styled.header`
  height: 56px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;
const Left = styled.div`
  display: flex;
  margin: 5px 10px;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 600px;
`;
const SearchInputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  height: 40px;
  padding: 0 10px;
`;
const SearchInput = styled.input`
  width: 100%;
  border: none;
`;
const BtnKeyboard = styled.button`
  border: none;
  background: none;
`;
const BtnSearch = styled.button`
  width: 64px;
  height: 40px;
  border: 1px solid #ddd;
  padding: 7px;
`;
const BtnMic = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #f9f9f9;
  margin-left: 10px;
  padding: 8px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const BtnRight = styled.button`
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  padding: 8px;
  margin-right: 8px;
`;
const BtnProfile = styled.button`
  border: none;
  background: none;
`;
const ImgProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export default YoutubeHeader;
