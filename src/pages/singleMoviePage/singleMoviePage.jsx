import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import './singleMoviePage.css'
import Button from "../../components/Button/Button";
import YoutubeVideo from "../../components/youtubeVideo/youtubeVideo";

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movie] = useGetSingleMovie(movieId);
  const [mobile, setMobile] = useState(false)

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

  return (
    <div>
      {movie && (
        <>
          <div className="SinglePage_main">
                {!mobile && <div className="SinglePage_main_left">
                    <h3>{movie.title.split(" ")[0]}</h3>
                    <h4>{movie.title.slice(1)}</h4>
                    <p>{movie.overview}</p>
                    <div>
                        <Button/>
                    </div>
                    <div>
                  {movie.stars.map((star)=>{
                    return <span key={star.credit_id}>| {star.name} | </span>
                  })}
                  </div>
                </div>}
                <div className="SinglePage_main_right">
                  {movie.main_poster ? <img className="SinglePage_main_img" src={movie.main_poster}/>
                  : <img className="SinglePage_main_img" src={movie.images.backdrops[0].path}/>}
                </div>
          </div>
          {mobile && <div className="overview_mobile"><p >{movie.overview}</p></div> }
          <div className="SinglePage_section">
                <div className="SinglePage_section_left">
                  <div>Director</div>
                  <div>{movie.director.name}</div>
                  <div>Writer</div>
                  <div>{movie.stars[0].name}</div>
                  <div>Stars</div>
                  <div>
                  {movie.stars.map((star)=>{
                    return <span key={star.credit_id}>| {star.name} | </span>
                  })}
                  </div>
                </div>
                <div className="SinglePage_section_right">
                  <h3>TRAILER</h3>
                      <YoutubeVideo className="trailerVideo" videoKey={movie.videos[0].key}/>
                </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleMoviePage;
