import { useParams } from "react-router-dom";

const ErrorPage = () => {
  const { errorCode } = useParams();
  if (!errorCode === "MovieNotFound") {
    return <h1>Movie Not Found</h1>;
  }
  return <h1>Error 404 page not found</h1>;
};

export default ErrorPage;
