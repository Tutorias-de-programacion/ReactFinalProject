//For now this are just functions that delivers sampling data 
import movies from "../SampleData/getPopular.sample.json";
/**
 * 
 * @param {string} category - `Represent the category of the movie list that we are looking for, could be: top_rated,  upcoming, latest, now_playing
 * @param {number} page - "Represent the page that we want to get"
 * @returns {Array} - Returns an array that contains the list of movies. <br> If none of the elements are find will return popular by default.
 */

function getMovieList(category,page)
{

    return movies.results
}


export default getMovieList; 