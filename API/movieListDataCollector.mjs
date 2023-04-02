import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
const api_key = process.env.TMDB_API_KEY;

/**
 * @param {string} category - `Represent the category of the movie list that we are looking for, could be: top_rated,  upcoming, latest, now_playing
 * @param {number} page - "Represent the page that we want to get"
 * @returns {Array} - Returns an array that contains the list of movies. <br> If none of the elements are find will return popular by default.
 */

async function getMovieList(category, page) {
  const movieListRaw = await axios.get(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${api_key}&language=en-US&page=${page}`
  );

  
  const movieList = await Promise.all(
    movieListRaw.data.results.map(async (movie) => {
      const images = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=${api_key}`
      );
      
      return {
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        main_poster: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
        images: images.data,
        votes: {
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
        },
      };
    })
  );
  

  return { results: movieList, total_pages: movieListRaw.data.total_pages };
}

export default getMovieList;
