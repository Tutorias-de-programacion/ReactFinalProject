import getMovieList from "../../hooks/getMovieList";
import Carousel from "react-bootstrap/Carousel";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Carrousel.css";

const ReactFlixCarrousel = ({ category, page, title = "carrousel", direction}) => {
  //To get the data from the category
  const movies = getMovieList(category, page);

  //To divide all the movies in group of the max amount selected

  //To define the max quantity of card
  const [maxAmountOfCards, setMaxAmountOfCards] = useState(6);

  useEffect(() => {
    if (window.innerWidth < 480) {
      setMaxAmountOfCards(1);
    } else if (window.innerWidth >= 480 && window.innerWidth < 992) {
      setMaxAmountOfCards(5);
    } else {
      setMaxAmountOfCards(10); /*We just spect tha the user wont have a big screen :)*/
    }
  });

  const groupsOfMovies = movies.reduce((parts, item, index) => {
    const movie = Math.floor(index / maxAmountOfCards);
    if (!parts[movie]) {
      parts[movie] = [];
    }
    parts[movie].push(item);
    return parts;
  }, []);

  //Determine the max size of the image

  return (
    <>
    <h2>{title}</h2>
    <Carousel indicators={false} slide={"next"}>
      {groupsOfMovies.map((movieGroup) => {
        return (
          <Carousel.Item>
            <CardGroup className="carrouselCard">
              {movieGroup.map((movie) => {
                return (
                  <Card>
                    <Card.Img
                      src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      className="carrouselCard--img"
                      />
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
