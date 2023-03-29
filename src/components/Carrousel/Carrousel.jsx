import useGetMovieList from "../../hooks/useGetMovieList";
import Carousel from "react-bootstrap/Carousel";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Carrousel.css";
import { Link } from "react-router-dom";

const ReactFlixCarrousel = ({
  category = "popular",
  page = 1,
  title = "carrousel",
  autoChange = true,
  setHoveredMovie = null,
}) => {

  //To manage the hover event
  function updateHoveredMovie(movie)
  {
   setHoveredMovie(movie)
    
  }


  //Determine if is going to autoChange or not this line disables the carrousel animation autoChange

  let interval = 5000;
  if (!autoChange) {
    interval = null;
  }

  //To get the data from the category
  const [movieList, setMovieList] = useGetMovieList(category, page);
  const [groupOfMovies, setGroupOfMovies] = useState([]);

  //To divide all the movies in group of the max amount selected
  //To define the max quantity of card
  const [maxAmountOfCards, setMaxAmountOfCards] = useState(6);

  useEffect(() => {
    //This script updates the amount of images each time that the image resize. It adds an event listener to the windows object.
   
   
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setMaxAmountOfCards(1);
      } else if (window.innerWidth >= 480 && window.innerWidth < 992) {
        setMaxAmountOfCards(5);
      } else {
        setMaxAmountOfCards(10);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []);
  
useEffect(() => {

  //To group movies on the group of movies 
  if (movieList.length > 0) {
    const groups = [];
    for (let i = 0; i < movieList.length; i += maxAmountOfCards) {
      groups.push(movieList.slice(i, i + maxAmountOfCards));
    }
    setGroupOfMovies(groups);
  }
}, [movieList, maxAmountOfCards]);

  return (
    <>
      <h2>{title}</h2>
      <Carousel indicators={false} slide={"next"} interval={interval}>
        {groupOfMovies.length > 0 &&
          groupOfMovies.map((movieGroup, index) => {
            return (
              <Carousel.Item key={`group-${index}`}>
                <CardGroup className="carrouselCard">
                  {movieGroup.map((movie) => {
                    return (
                      <Card key={movie.id} className="card">
                        <Link to={`movie/${movie.id}`}>
                          <Card.Img
                            src={movie.main_poster}
                            className="carrouselCard--img"
                            onMouseOver={()=>{setHoveredMovie(movie)}}
                          />
                        </Link>
                      </Card>
                    );
                  })}
                </CardGroup>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </>
  );
};

export default ReactFlixCarrousel;
