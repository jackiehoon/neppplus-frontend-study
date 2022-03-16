import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../../apis/naver";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const params = useParams();
  const { isbn } = params;

  useEffect(() => {
    searchBook();
  }, []);

  const searchBook = async () => {
    const result = await getBookDetail({ d_isbn: isbn });
    setBook(result.items[0]);
  };

  return (
    <Wrapper>
      <Thumbnail src={book.image} />
      <Title>{book.title}</Title>
      <Description>{book.description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px;
`;
const Thumbnail = styled.img`
  width: 50%;
  display: block;
  margin: 0 auto;
`;
const Title = styled.h2``;
const Description = styled.p``;

export default BookDetail;
