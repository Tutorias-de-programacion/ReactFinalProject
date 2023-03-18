import { useState , useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSearchMovie from "../../hooks/useSearchMovie";
import Card from "../../components/Card/Card";
import "./searchPage.css"

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
          <h3>Your current search is: {query}</h3>
          <div className="cards_list">
              {movieList && movieList.map((movie)=>{
                  return <Card
                  title={movie.title}
                  key={movie.id}
                  url={movie.main_poster}
                  id={movie.id}
                  />
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
