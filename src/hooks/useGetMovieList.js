import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @param {string} category - `Represent the category of the movie list that we are looking for, could be: top_rated,  upcoming, latest, now_playing
 * @param {number} page - "Represent the page that we want to get"
 * @returns {Array} - Returns an array that contains the list of movies. <br> If none of the elements are find will return popular by default. And the amount of pages. 
 */

function useGetMovieList(category, page) {
  const [movieList, setMovieList] = useState({});
  const [amountOfPages, setAmountOfPages] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:5000/movies/${category}/page/${page}`
      );
      setAmountOfPages(response.data.total_pages)
      setMovieList(response.data.results);
    }

    fetchData();
  }, [page]);

  return [movieList, setMovieList, amountOfPages, setAmountOfPages];
}

export default useGetMovieList;
