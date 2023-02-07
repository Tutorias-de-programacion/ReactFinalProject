import { useState } from "react";
import { useParams } from "react-router-dom";
import useSearchMovie from "../../hooks/useSearchMovie";

const SearchPage = () => {
  const { query, page: pageNo } = useParams();
  const [movieList, amountOfPages] = useSearchMovie(query, pageNo);

  return (
    <>
      <div className="body">
        <div>
          <h2>To change page</h2>
          <button onClick={() => handleCLick(false)}>Next</button>
        </div>
        <h1>Your current search is: {query}</h1>
        {movieList && JSON.stringify(movieList)}
      </div>
    </>
  );
};

export default SearchPage;
