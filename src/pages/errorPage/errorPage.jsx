import { useParams } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar'

const ErrorPage = () => {
  const { errorCode } = useParams();
  if (!errorCode === "MovieNotFound") {
    return <>
        <h1>Movie Not Found</h1>
        <h2>Don't give up, look for another movie?</h2>
        <SearchBar/>
    </>
    ;
  }
  return <>
  <h1>Error 404 page not found</h1>
  <SearchBar/>
</>;
};

export default ErrorPage;
