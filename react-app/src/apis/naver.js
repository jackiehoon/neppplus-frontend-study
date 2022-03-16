import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
    "X-Naver-Client-Secret": "kcNwJta1kV",
  },
});

export const getMovieList = async (params) => {
  const url = "/v1/search/movie.json";
  const method = "GET";
  const { data } = await instance({
    url,
    method,
    params,
  });
  return data;
};

export const getBookList = async (params) => {
  const config = {
    url: "/v1/search/book.json",
    method: "GET",
    params,
  };
  const { data } = await instance(config);
  return data;
};

export const getBookDetail = async (params) => {
  const config = {
    url: "/v1/search/book_adv.json",
    method: "GET",
    params,
  };
  const { data } = await instance(config);
  return data;
};
