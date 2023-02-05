import HomePage from "./pages/homePage/homePage";
import ErrorPage from "./pages/errorPage/errorPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage/aboutPage";
import SingleMoviePage from "./pages/singleMoviePage/singleMoviePage";
import SearchPage from "./pages/searchPage/searchPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/*/Static links */}
        <Route index path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

        {/*Dynamic links */}
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/movie/:movieId" element={<SingleMoviePage />} />
        <Route path="/error/:errorCode" element={<ErrorPage />} />

        {/*Unknown pages*/}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
