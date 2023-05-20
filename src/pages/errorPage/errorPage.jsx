import { useParams } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar'
import style from "./errorPage.module.css"

const ErrorPage = () => {
  const { errorCode } = useParams();
  if (!errorCode === "MovieNotFound") {
    return <>
      <div className={style.body}>
          <h1>Movie Not Found</h1>
          <h2>Don't give up, look for another movie?</h2>
          <SearchBar/>
      </div>
    </>
    ;
  }
  return <>
  <div className={style.body}>
    <h1>Error 404 page not found</h1>
    <SearchBar/>
  </div>
</>;
};

export default ErrorPage;
