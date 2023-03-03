import ReactFlixCarrousel from "../../components/Carrousel/Carrousel";
import './homePage.css'

const HomePage = () => {
  return (
    <>
      <div className="body">
        <h1>Welcome to reactFlix</h1>
        <h2>Please read the readme file before do any change to this code.</h2>
        <h2>Check the backlog here:</h2>
        <a href="https://www.notion.so/">www.notion.so</a>
        <p>For further information please ask in the whatsapp group. </p>

</div>
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
      <ReactFlixCarrousel title="Popular" page={1} autoChange={false} />
      <ReactFlixCarrousel title="Upcoming!" page={2} category={"upcoming"} />
      <ReactFlixCarrousel title="Now Playing!" page={2} category={"now_playing"} />
      <ReactFlixCarrousel title="Top Rated!" page={2} category={"top_rated"} />

      
    </>
  );
};

export default HomePage;
