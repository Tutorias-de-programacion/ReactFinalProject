import { useParams } from "react-router-dom";
import searchMovie from "../../hooks/searchMovie";


const SearchPage = () => {
  const { query } = useParams();
  const currentSearch = searchMovie(query);

  return (
    <>
      <div className="body">
          <h1>
              Your current search is: {query}
          </h1>
          {
            JSON.stringify(currentSearch)
          }
      </div>
    </>
  );
};

export default SearchPage;
