import ReactFlixCarrousel from "../../components/Carrousel/Carrousel";
import { useEffect, useState } from "react";
import "./homePage.css";
import Viewer from "../../components/Viewer/Viewer";

import useGetMovieList from "../../hooks/useGetMovieList";

const HomePage = () => {
  const [randomPickupList] = useGetMovieList("upcoming", 1);
  const [hoveredMovie, setHoveredMovie] = useState();

  useEffect(() => {
    function getARandomMovie(movieList) {
      if (movieList.length > 0 && !hoveredMovie) {
        const validMovies = movieList.filter((movie) => {
          return movie.images?.backdrops.length > 0;
        });
        setHoveredMovie(
          validMovies[Math.round(validMovies.length * Math.random())]
        );
      }
    }
    getARandomMovie(randomPickupList);
  }, [setHoveredMovie, randomPickupList]);

  return (
    <div className="home">
      {/*Keep in mind that the carrousel will work just if you use it in this way, but if you don't set the values. It has default values that will going to be added like this:
      {
        category ="popular",
        page= 1,
        title = "Popular",
        autoChange = true

        /Also keep in mind that he categories allowed are:
        top_rated
        popular 
        upcoming
        now_playing
        
        Also this categories are case sensitive. If you don't set it right it won't work.         

      
    added*/}
      <div className="viewerSection">
        <Viewer hoveredMovie={hoveredMovie} />
        <ReactFlixCarrousel
          title=""
          page={1}
          autoChange={false}
          category="now_playing"
          setHoveredMovie={setHoveredMovie}
          hoveredMovie={hoveredMovie}
        />
      </div>
      <div className="carrouselSection">
        <ReactFlixCarrousel title="Upcoming!" page={2} category={"upcoming"} />

        <ReactFlixCarrousel title="Popular!" page={2} category={"popular"} />
        <ReactFlixCarrousel
          title="Top Rated!"
          page={2}
          category={"top_rated"}
        />
      </div>
    </div>
  );
};

export default HomePage;
