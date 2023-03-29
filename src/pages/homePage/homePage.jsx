import ReactFlixCarrousel from "../../components/Carrousel/Carrousel";
import { useEffect, useState } from "react";
import "./homePage.css";
import Viewer from "../../components/Viewer/Viewer";

const HomePage = () => {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <>
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

      <Viewer hoveredMovie={hoveredMovie} />
      <ReactFlixCarrousel
        title="Popular"
        page={1}
        autoChange={false}
        setHoveredMovie={setHoveredMovie}
        hoveredMovie={hoveredMovie}
      />
      <ReactFlixCarrousel title="Upcoming!" page={2} category={"upcoming"} />
      <ReactFlixCarrousel
        title="Now Playing!"
        page={2}
        category={"now_playing"}
      />
      <ReactFlixCarrousel title="Top Rated!" page={2} category={"top_rated"} />
    </>
  );
};

export default HomePage;
