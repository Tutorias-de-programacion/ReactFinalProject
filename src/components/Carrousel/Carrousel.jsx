import getMovieList from "../../hooks/getMovieList";
import Carousel from "react-bootstrap/Carousel";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Carrousel.css";
import { Link } from "react-router-dom";
const ReactFlixCarrousel = ({
  category = "Popular",
  page = 1,
  title = "carrousel",
  autoChange = true,
}) => {
  //Determine if is going to autoChange or not this line disables the carrousel animation autoChange

  let interval = 5000;
  if (!autoChange) {
    interval = null;
  }

  //To get the data from the category
  const movies = getMovieList(category, page);

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

  const groupsOfMovies = movies.reduce((parts, item, index) => {
    const movie = Math.floor(index / maxAmountOfCards);
    if (!parts[movie]) {
      parts[movie] = [];
    }
    parts[movie].push(item);
    return parts;
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <Carousel indicators={false} slide={"next"} interval={interval}>
        {groupsOfMovies.map((movieGroup, index) => {
          return (
            <Carousel.Item key={`group-${index}`}>
              <CardGroup className="carrouselCard">
                {movieGroup.map((movie) => {
                  return (
                    <Card key={movie.id}>
                      <Link to={`movie/${movie.id}`}>
                        <Card.Img
                          src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          className="carrouselCard--img"
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
