import singleMovieSample from "../SampleData/getSingleMovie.sample.json";
import movieVideoSample from "../SampleData/getMovieVideo.json";
import castSample from "../SampleData/getCast.json"


/**
 * Gets the information about the director after look for the cast information. 
 * @param {Number} movieId - The id of the movie. 
 * @returns The director information. 
 */


function getDirector(movieId)
{
  

  
  return castSample.crew.find(member=> member.job ==="Director" && member.department ==="Directing")
}


/**
 *
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
  console.log(getDirector())

  // return(singleMovieSample.results)

}

export default getSingleMovie;
