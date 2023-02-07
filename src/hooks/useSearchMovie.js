import { useState, useEffect } from "react";
import axios from "axios";

function useSearchMovie(query, page) {
  const [movieList, setMovieList] = useState([]);
  const [amountOfPages, setAmountOfPages] = useState(0);


  useEffect(() => {
    async function fetchData() {
      console.log(query)
      const response = await axios.get(
        `http://localhost:5000/movie/query=${query}/page/${page}`
      );
      setAmountOfPages(response.data.total_pages);
      setMovieList(response.data.results);
    }

    fetchData();
  }, []);

  return [movieList, amountOfPages];
}

export default useSearchMovie;
