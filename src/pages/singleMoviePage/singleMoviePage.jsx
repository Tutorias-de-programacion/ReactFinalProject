import { useParams } from "react-router-dom";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";

const SingleMoviePage = () => {

  const { movieId } = useParams();
  const [movie] = useGetSingleMovie(movieId); 
  console.log(movie);

  return (
    <>
      <h1>Here is an example of how you can use this data</h1>
      <h2>Your movie id is {movieId}</h2>

      {movie && (
        <div>
          <h3>Movie title: {movie.title}</h3>
          <h3>Movie Overview</h3>
          <p>{movie.overview}</p>
          <h3>The movie poster</h3>
          <img src={movie.main_poster} />
          <h3>Other images that you can use from here:</h3>

          {movie.images.backdrops && (
            <img
              src={`http://image.tmdb.org/t/p/w500/${movie.images.backdrops[0].file_path}`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SingleMoviePage;
