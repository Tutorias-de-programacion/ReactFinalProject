import { useState, useEffect } from "react";
import axios from "axios";

function useGetSingleMovie(movieId) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/movie/${movieId}`
      );
      setMovieData(response.data);
    };
    fetchData();
  }, [movieId]);

  return [movieData, setMovieData];
}

export default useGetSingleMovie;
