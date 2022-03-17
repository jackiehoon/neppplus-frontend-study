import styled from "styled-components";
import { Link } from "react-router-dom";

const BookList = ({ data }) => {
  const handleError = (e) => {
    e.target.src =
      "https://w7.pngwing.com/pngs/813/610/png-transparent-http-404-graphy-error-others-3d-computer-graphics-photography-sign-thumbnail.png";
  };
  return (
    <List>
      {data.map(({ isbn, title, image }) => (
        <Link key={isbn} to={`/naver/book/${isbn.split(" ")[1]}`}>
          <Item>
            <Thumbnail src={image} onError={handleError} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Item>
        </Link>
      ))}
    </List>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 15px;
`;
const Item = styled.div``;
const Thumbnail = styled.img`
  width: 100%;
`;
const Title = styled.span``;

export default BookList;
