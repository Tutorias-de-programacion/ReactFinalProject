import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const api_key = process.env.TMDB_API_KEY;


async function searchMovie(query, page) {
    const movieListRaw = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=${page}&include_adult=false&query=${query}`
    );
    let movieList = await movieListRaw.data.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        main_poster: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
        votes: {
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
        },
      };


    });

    return {results: movieList, total_pages: movieListRaw.data.total_pages};
  }
export default searchMovie; 