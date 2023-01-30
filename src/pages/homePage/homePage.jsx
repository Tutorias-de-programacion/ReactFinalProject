import ReactFlixCarrousel from "../../components/Carrousel/Carrousel";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to reactFlix</h1>
      <h2>Please read the readme file before do any change to this code.</h2>
      <h2>Check the backlog here:</h2>
      <a href="https://www.notion.so/">www.notion.so</a>
      <p>For further information please ask in the whatsapp group. </p>

      {/*Keep in mind that the carrousel will work just if you use it in this way, but if you don't set the values. It has default values that will going to be added like this:
      {
        category ="popular",
        page= 1,
        title = "Popular",
        autoChange = true
      
    added*/}
      <ReactFlixCarrousel title="Popular" page={1} autoChange={false} />

      <ReactFlixCarrousel title="Unpopular" />
    </>
  );
};

export default HomePage;
