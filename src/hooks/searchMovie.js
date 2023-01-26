import searchSample from "../SampleData/movieSearch.samaple.json";

/**
 * @param {string} query - The movie that you are going to search.
 * @returns - A list of movies. 
 */

function searchMovie(query) {
  return searchSample.results;
}

export default searchMovie;
