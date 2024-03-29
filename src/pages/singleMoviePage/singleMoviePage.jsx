import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import './singleMoviePage.css'
import Buttons from "../../components/Buttons/Buttons";
import YoutubeVideo from "../../components/youtubeVideo/youtubeVideo";
import CarrouselSimilar from "../../components/CarrouselSimilar/CarrouselSimilar";

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movie] = useGetSingleMovie(movieId);
  const [mobile, setMobile] = useState(false)
  const [movieName, setMovieName]= useState([])

  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []);

  useEffect(()=>{
    if (movie){
      setMovieName(movie.title.split(" "))
    }
  },[movie])

  return (
    <>
      {movie && (
        <>
          <div className="SinglePage_main">
                {!mobile && <div className="SinglePage_main_left">
                    <h3>{movie.title.split(" ")[0]}</h3>
                    {movieName.length > 1 && <h4>{movie.title.slice(movie.title.split(" ")[0].length)}</h4>}
                    <p>{movie.overview}</p>
                    <div>
                      <Buttons/>
                    </div>
                </div>}
                <div className="SinglePage_main_right">
                  {movie.main_poster ? <img className="SinglePage_main_img" src={movie.main_poster}/>
                  : <img className="SinglePage_main_img" alt={movie.title} src={movie.images.backdrops[0].path}/>}
                </div>
                <div className="mobile_section">
          </div>
        </div>
        {mobile && <div id="SinglePage_mobile">
              <Buttons/>
              <p>{movie.overview}</p>
        </div>}
          <div className="SinglePage_section">
                <div className="SinglePage_section_left">
                  <div>Director</div>
                  {movie.director ? 
                  <div>{movie.director.name}</div>
                  : <div>unknown director</div>}
                  <div>Writer</div>
                  {movie.stars[0] ? 
                  <div>{movie.stars[0].name}</div> 
                  : <div>unknown Writer</div>}
                  <div>Stars</div>
                  <div>
                  {movie.stars ? movie.stars.map((star)=>{
                    return <span key={star.credit_id}>| {star.name} | </span>
                  })
                  : <div>unknown Stars</div>}
                  </div>
                </div>
                <div className="SinglePage_section_right">
                  <h3>TRAILER</h3>
                      {movie.videos[0] ?
                      <YoutubeVideo className="trailerVideo" videoKey={movie.videos[0].key}/> 
                      :<YoutubeVideo className="trailerVideo" videoKey={movie.videos[0]}/>}
                </div>
          </div>
           {movie && <>{movie.similar.length > 0 && <div>
            <CarrouselSimilar similar={movie.similar}/>
            </div>} </> }            

        </>
      )}

    </>
  );
};

export default SingleMoviePage;
