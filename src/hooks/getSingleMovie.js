import singleMovieSample from "../SampleData/getSingleMovie.sample.json";
import movieVideoSample from "../SampleData/getMovieVideo.json";
import castSample from "../SampleData/getCast.json";
// @ts-nocheck

/**
 * In theory the tree main actors should be always the first 3 
 * @param {number} id The id of the movie.
 * @returns -The tree first actors
 */
function getMainActors(id)
{
  return(castSample.crew.slice(0,3))
}


/**
 * Gets the information about the director after look for the cast information.
 * @param {Number} movieId - The id of the movie.
 * @returns The writer information.
 */
function getWriter(id) {
  return castSample.crew.find(
    (member) => member.job === "Writer" || member.department === "Writing"
  );
}

/**
 * Gets the information about the director after look for the cast information.
 * @param {Number} movieId - The id of the movie.
 * @returns The director information.
 */

function getDirector(movieId) {
  return castSample.crew.find(
    (member) => member.job === "Director" && member.department === "Directing"
  );
}

/**
 * @param {number} id -Id of the movie that you are going to show.
 * @returns - The video info of the movie
 */

function getMovieVideos(movieId) {
  return movieVideoSample.results;
}

/**
 *
 * @param {number} id -Id of the movie that you are going to show.
 * @returns - The data of te movie
 */

function getSingleMovie(id) {
  const movieInfo = singleMovieSample;
  const director = getDirector(id);
  const videos = getMovieVideos(id);
  const writer = getWriter(id);
  const stars = getMainActors(id)

  //To keep the data simple i will return just the most valuable data for the project
  return {
    id: movieInfo.id,
    title: movieInfo.original_title,
    overview: movieInfo.overview,
    posters:  `http://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`,
    director: director,
    videos: videos,
    writer: writer,
    stars,

  };
}

export default getSingleMovie;
