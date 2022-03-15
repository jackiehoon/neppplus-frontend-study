import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Wrapper>
      <PageTitle>Search Movie & Book</PageTitle>
      <SubTitle>
        by <ImgD2Logo src="http://oss.kr/oss/images/apply/NAVER_D2_logo.png" />
      </SubTitle>
      <Link to="/naver/movie">
        <BtnMovie>
          <span>MOVIE</span>
        </BtnMovie>
      </Link>
      <Link to="/naver/book">
        <BtnBook>
          <span>BOOK</span>
        </BtnBook>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  background: #f8f8f8;
  min-height: 100vh;
`;
const PageTitle = styled.h1`
  text-align: center;
`;
const SubTitle = styled.h2`
  text-align: right;
`;
const ImgD2Logo = styled.img`
  width: 100px;
`;
const Btn = styled.button`
  width: 100%;
  margin: 10px 0;
  height: 180px;
  border: none;
  background: none;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  :before {
    z-index: -1;
    opacity: 0.7;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  span {
    color: #fff;
    font-size: 28px;
    background-color: #f44336;
    line-height: 1.5;
    padding: 3px;
    border-radius: 4px;
  }
`;
const BtnMovie = styled(Btn)`
  :before {
    background-image: url("https://vrthumb.imagetoday.co.kr/2020/06/08/tid327t000554.jpg");
  }
`;
const BtnBook = styled(Btn)`
  :before {
    background-image: url("https://cdn.pixabay.com/photo/2021/03/20/01/35/book-store-6108817_960_720.png");
  }
`;

export default Main;
