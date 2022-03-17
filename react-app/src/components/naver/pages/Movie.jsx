import { useEffect, useState } from "react";
import styled from "styled-components";

import { countryList, genreList } from "../../../datas/naver";
import MovieList from "../organisms/MovieList";
import { getMovieList } from "../../../apis/naver";
import Pagination from "../organisms/Pagination";

const Movie = () => {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("ALL");
  const [genre, setGenre] = useState("ALL");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // IIFE
    // (async () => {})();
    searchMovie();
  }, [country, genre, page, query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchMovie = async () => {
    if (!query) return;

    // const params = { query: text, country, genre };
    // if (country === "ALL") delete params.country;

    // const page =  10 20  30  40  50;
    // const start = 1 11 21 31 41;
    const start = page * 10 - 9;
    const params = { query, start };
    if (country !== "ALL") params.country = country;
    if (genre !== "ALL") params.genre = genre;

    const { items, total } = await getMovieList(params);
    setMovieList(items);
    setTotal(total);
  };

  return (
    <Wrapper>
      <PageTitle>MOVIE</PageTitle>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)} value={country}>
          <option value="ALL">전체</option>
          {countryList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setGenre(e.target.value)} value={genre}>
          <option value="ALL">전체</option>
          {genreList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <InputText
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
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
  flex-wrap: wrap;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;

export default Movie;
