import { useState } from "react";
import styled from "styled-components";

import MovieList from "../organisms/MovieList";
import { getMovieList } from "../../../apis/naver";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { items } = await getMovieList({ query: text });

    setMovieList(items);
  };

  return (
    <Wrapper>
      <PageTitle>MOVIE</PageTitle>
      <Form onSubmit={handleSubmit}>
        <InputText
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
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

export default Movie;
