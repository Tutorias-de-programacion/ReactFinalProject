import { useState, useEffect } from "react";
import axios from "axios";

function useSearchMovie(query, page) {
  const [movieList, setMovieList] = useState([]);
  const [maxAmountOfPages, setMaxAmountOfPages] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:5000/movie/${query}/page/${page}`
      );
      setMaxAmountOfPages(response.data.total_pages);
      setMovieList(response.data.results);
    }

    fetchData();
  }, [query, page]);

  return [movieList, maxAmountOfPages];
}

export default useSearchMovie;
