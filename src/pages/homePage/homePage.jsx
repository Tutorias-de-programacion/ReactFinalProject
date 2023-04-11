import ReactFlixCarrousel from "../../components/Carrousel/Carrousel";
import { useEffect, useState } from "react";
import './homePage.css'
import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import Buttons from "../../components/Buttons/Buttons";


const HomePage = () => {

const [moviePoster] = useGetSingleMovie(1011679)
const [moviePosterName, setMoviePosterName]= useState([])
const [homeMobile, setHomeMobile] = useState(false)


useEffect(() => {
  const handleResizeHome = () => {
    if (window.innerWidth < 1120) {
      setHomeMobile(true);
    } else {
      setHomeMobile(false);
    }
  };
  window.addEventListener("resize", handleResizeHome);
  handleResizeHome();
  
  
  return () => {
    window.removeEventListener("resize", handleResizeHome);
  };
  
}, []);

useEffect(()=>{
  if (moviePoster){
    setMoviePosterName(moviePoster.title.split(" "))
  }

},[moviePoster])

  return (
    <>
      <div className="body">
     
      
        {/* <h1>Welcome to reactFlix</h1>
        <h2>Please read the readme file before do any change to this code.</h2>
        <h2>Check the backlog here:</h2>
        <a href="https://www.notion.so/">www.notion.so</a>
        <p>For further information please ask in the whatsapp group. </p> */}
</div>
     {!homeMobile && 
     <>{moviePoster && <div className="homePoster">
          <img alt={moviePoster.title} src={moviePoster.images.backdrops[0].path} />
          <div className="homePoster_section">
          <div className="homePoster_info">
            <div className="homePosterTittle">
            <h3>{moviePoster.title.split(" ")[0]}</h3>
          {moviePosterName.length > 1 && <h4>{moviePoster.title.slice(moviePoster.title.split(" ")[0].length)}</h4>}
            
            </div>
          <p>{moviePoster.overview}</p>
          <div>
          {moviePoster.stars ? moviePoster.stars.map((star)=>{
                    return <span key={star.credit_id}>| {star.name} | </span>
                  })
                  : <></>}
          </div>
            <Buttons/>
          </div>
         {!homeMobile && <div className="homePoster_carrousel">
          <ReactFlixCarrousel title="Popular" page={1} autoChange={false} />
          </div>}
          </div>
          
      </div>}</>}

      {homeMobile &&<>{ moviePoster && 
  
  <div className="homePosterMobile">
      <img alt={moviePoster.title} src={moviePoster.images.backdrops[0].path} />
      <div className="PosterMobile_section">
          <h3>{moviePoster.title.split(" ")[0]}</h3>
          {moviePosterName.length > 1 && <h4>{moviePoster.title.slice(moviePoster.title.split(" ")[0].length)}</h4>}
          <Buttons/>
      </div>
  </div>}</>}
      
    
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
      {homeMobile && <ReactFlixCarrousel title="Popular" page={1} autoChange={false}/>}
      <ReactFlixCarrousel title="Upcoming!" page={2} category={"upcoming"} />
      <ReactFlixCarrousel title="Now Playing!" page={2} category={"now_playing"} />
      <ReactFlixCarrousel title="Top Rated!" page={2} category={"top_rated"} />
    </>
  );
};

export default HomePage;
