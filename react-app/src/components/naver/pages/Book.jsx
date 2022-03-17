import { useEffect, useState } from "react";
import styled from "styled-components";
import qs from "qs";
import { useNavigate, useLocation } from "react-router-dom";

import { getBookList } from "../../../apis/naver";
import BookList from "../organisms/BookList";
import Pagination from "../organisms/Pagination";

const Book = () => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const { query, page } = qs.parse(search.slice(1));
    if (query) {
      setQuery(query);
      setText(query);
    } else {
      reset();
    }
    if (page) {
      setPage(+page);
    }
  }, [search]);

  const reset = () => {
    setText("");
    setQuery("");
    setPage(1);
    setTotal(0);
    setBookList([]);
  };

  useEffect(() => {
    searchBook();
  }, [page, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchBook = async () => {
    if (query === "") return;
    const start = page * 10 - 9;
    const { items, total } = await getBookList({ query, start });
    setBookList(items);
    setTotal(total);

    const search = qs.stringify({ query: query, page: page });
    navigate({ search });
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
      <Pagination
        nowPage={page}
        onPageChange={(page) => setPage(page)}
        total={total}
      />
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
