import styled from "styled-components";
import { Outlet } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <Header>
        <Content>
          <Logo src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
        </Content>
      </Header>
      <Outlet />
    </>
  );
};

const Header = styled.header`
  height: 60px;
  border-bottom: 1px solid #ddd;
`;
const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const Logo = styled.img``;
export default TopNav;
