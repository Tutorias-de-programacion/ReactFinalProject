import { useParams } from "react-router-dom";
import searchMovie from "../../hooks/searchMovie";


const SearchPage = () => {
  const { query } = useParams();
  const currentSearch = searchMovie(query);

  return (
    <>
        <h1>
            Your current search is: {query}
        </h1>
        {
           JSON.stringify(currentSearch)
        }
    </>
  );
};

export default SearchPage;
