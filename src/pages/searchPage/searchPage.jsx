import { useParams, useNavigate } from "react-router-dom";
import useSearchMovie from "../../hooks/useSearchMovie";
import Card from "../../components/Card/Card";
import "./searchPage.css"
import SearchBar from "../../components/SearchBar/SearchBar";

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
      <h3>Your current search is: {query}</h3>
      {movieList.length < 1 && 
      <div className="movie_dont_find">
        <h2>Movie not found</h2>
        <h2>Don't give up</h2>
        <h2>Shall we find another movie?</h2>
      </div>}
        <div>
          {movieList.length > 1 && <div className="search_buttons"><button onClick={handleCLickPrev}>Previous</button>
          <button onClick={handleCLickNext}>Next</button></div>}
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
