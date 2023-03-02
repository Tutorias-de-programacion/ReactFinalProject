import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSearchMovie from "../../hooks/useSearchMovie";

const SearchPage = () => {
  const { query, pageNo } = useParams();
  const [movieList, maxAmountOfPages] = useSearchMovie(query, pageNo);

  let navigate = useNavigate();

  function handleCLickNext() {
    if (Number(pageNo) < maxAmountOfPages) {
      navigate(`/search/${query}/page/${Number(pageNo) + 1}`);
    }
  }
  function handleCLickPrev() {
    if (Number(pageNo) > 1) {
      navigate(`/search/${query}/page/${Number(pageNo) - 1}`);
    }
  }

  return (
    <>
      <div className="body">
        <div>
          <h2>To change page</h2>
          <button onClick={handleCLickPrev}>Previous</button>
          <button onClick={handleCLickNext}>Next</button>
        <div className="mario"></div>
          <h3>
            The max amount of pages that you can use is {maxAmountOfPages}
          </h3>
        </div>
        <h3>Your current search is: {query}</h3>
        {movieList && JSON.stringify(movieList)}
      </div>
    </>
  );
};

export default SearchPage;
