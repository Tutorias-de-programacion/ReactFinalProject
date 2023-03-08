import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import './singleMoviePage.css'
import Button from "../../components/Button/Button";

/*

import dataSchema from "./dataSchema.png";
I know this is obvious but if don't delete
       the data Schema when you finish working with this page
       or if you don't need it. 
       */

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movie] = useGetSingleMovie(movieId);
  const [mobile, setMobile] = useState(false)

  useEffect(()=>{
   console.log(movie)
  
  },[movie])

  useEffect(() => {
    //This script updates the amount of images each time that the image resize. It adds an event listener to the windows object.
   
   
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
    <>
      {/* <h1>Data Schema</h1>
      <img src={dataSchema} width="100%" /> */}
      {/*I know this is obvious but if don't delete
       the data Schema when you finish working with this page
       or if you don't need it*/}
      {/* <h2>Here is an example of how you can use this data</h2>
      <h2>Your movie id is {movieId}</h2> */}
       
      {movie && (
        <div>
          <div className="SinglePage_main">
                {!mobile && <div className="SinglePage_main_left">
                    <h3>{movie.title.split(" ")[0]}</h3>
                    <h4>{movie.title.slice(1)}</h4>
                    <p>{movie.overview}</p>
                    <div>
                        button
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
                  <iframe className="trailerVideo" src={`https://www.youtube.com/embed/${movie.videos[0].key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      {/* <YoutubeVideo width="300" height="200" videoKey={movie.videos[0].key}/> */}
                </div>
          </div>
          
          {/*
          <h3>Other images that you can use from here:</h3>

          movie.images.backdrops &&
            movie.images.backdrops.map((backdrop, key) => {
              return <img src={backdrop.path} key={key}/>;
            })
            Sometimes movies doesn't have backdrops, please consider 
            to use an alternative image when the image doesn't exist.
            */
            

            }

        </div>
      )}
    </>
  );
};

export default SingleMoviePage;
