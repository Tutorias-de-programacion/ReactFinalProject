import Carousel from "react-bootstrap/Carousel";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./CarrouselSimilar.css";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const CarrouselSimilar = ({
  category = "Similar Movies",
  page = 1,
  title = "Similar Movies",
  autoChange = true,
  similar = []
}) => {
  //Determine if is going to autoChange or not this line disables the carrousel animation autoChange

  let interval = 5000;
  if (!autoChange) {
    interval = null;
  }

  //To get the data from the category
  const [similarList, setSimilarList] = useState(similar);
  const [groupOfSimilar, setGroupOfSimilar] = useState([]);

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
  if (similarList.length > 0) {
    const groups = [];
    for (let i = 0; i < similarList.length; i += maxAmountOfCards) {
      groups.push(similarList.slice(i, i + maxAmountOfCards));
    }
    setGroupOfSimilar(groups);
  }
}, [similarList, maxAmountOfCards]);

  return (
    <>
      <h2>{title}</h2>
      <Carousel indicators={false} slide={"next"} interval={interval}>
        {groupOfSimilar.length > 0 &&
          groupOfSimilar.map((movieGroup, index) => {
            return (
              <Carousel.Item key={`group-${index}`}>
                <CardGroup className="carrouselCard">
                  {movieGroup.map((movie) => {
                    return (
                      <Card key={movie.id} className="card">
                        <Link to={`../movie/${movie.id}`} relative="route">
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

export default CarrouselSimilar;
