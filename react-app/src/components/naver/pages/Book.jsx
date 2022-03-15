import { useState } from "react";
import styled from "styled-components";
import { getBookList } from "../../../apis/naver";
import BookList from "../organisms/BookList";

const Book = () => {
  const [text, setText] = useState("");
  const [bookList, setBookList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { items } = await getBookList({ query: text });
    setBookList(items);
  };

  return (
    <Wrapper>
      <PageTitle>Book</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <BookList data={bookList} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const PageTitle = styled.h2`
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  padding: 15px;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;
export default Book;
