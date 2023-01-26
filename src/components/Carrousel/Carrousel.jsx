import getMovieList from "../../hooks/getMovieList";

const Carrousel = ({ category, page, title }) => {
  //To get the data from the category
  const movies = getMovieList(category, page);

  console.log(movies); //<-- You can see the current list of movies.

  return <h1>{title}</h1>;
};

export default Carrousel;
