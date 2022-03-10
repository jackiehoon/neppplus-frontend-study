import { useState } from "react";
import { useParams } from "react-router-dom";
import NewsList from "./NewsList";
import Categories from "./Categories";

const News = () => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <>
      <Categories category={category} />
      <NewsList category={category} />
    </>
  );
};

export default News;
