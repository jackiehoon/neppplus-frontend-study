import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
const linkList = [
  {
    link: "/naver",
    name: "메인",
  },
  {
    link: "/naver/movie",
    name: "영화",
  },
  {
    link: "/naver/book",
    name: "책",
  },
];

const TopNav = () => {
  const { pathname } = useLocation();

  if (pathname === "/naver") return <></>;

  return (
    <Container>
      <Nav>
        {linkList.map(({ link, name }) => (
          <Link to={link} key={link}>
            <Button>{name}</Button>
          </Link>
        ))}
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #efefef;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 0 5px;
`;

export default TopNav;
