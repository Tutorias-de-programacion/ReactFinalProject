import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { movieId } = useParams();
  return (
    <>
      <h1>Single Movie Page</h1>
      <h2>Your movie id is{movieId}</h2>
    </>
  );
};

export default SingleMoviePage;
