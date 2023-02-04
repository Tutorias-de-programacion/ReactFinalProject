import { useParams } from "react-router-dom";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import YoutubeVideo from "../../components/youtubeVideo/youtubeVideo";


import dataSchema from "./dataSchema.png";
/*I know this is obvious but if don't delete
       the data Schema when you finish working with this page
       or if you don't need it. 
       */

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movie] = useGetSingleMovie(movieId);

  return (
    <>
      <h1>Data Schema</h1>
      <img src={dataSchema} width="100%" />
      {/*I know this is obvious but if don't delete
       the data Schema when you finish working with this page
       or if you don't need it*/}
      <h2>Here is an example of how you can use this data</h2>
      <h2>Your movie id is {movieId}</h2>
       
      {movie && (
        <div>
          <h3>Movie title: {movie.title}</h3>
          <h3>Movie Overview</h3>
          <p>{movie.overview}</p>
          <h3>The movie poster</h3>
          <img src={movie.main_poster} />
          <YoutubeVideo videoKey={movie.videos[0].key}/>
          <h3>Other images that you can use from here:</h3>

          {movie.images.backdrops &&
            movie.images.backdrops.map((backdrop, key) => {
              return <img src={backdrop.path} key={key}/>;
            })
            /*Sometimes movies doesn't have backdrops, please consider 
            to use an alternative image when the image doesn't exist.
            */
            
            }
        </div>
      )}
    </>
  );
};

export default SingleMoviePage;
