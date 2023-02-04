import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const api_key = process.env.TMDB_API_KEY;

async function getMovieImages(movieId) {
  const movieDetails = await getMovieDetails(movieId);
  let imagesData = {};
  if (imagesData.backdrop_path) {
    imagesData = { poster: movieDetails.backdrop_path };
  }
  //Detect movie images with get images API
  const getImages = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${api_key}`
  );
  imagesData = { ...imagesData, images: await getImages.data };

  //Detect if the movies has collections
  if (movieDetails.belongs_to_collection) {
    const collectionId = movieDetails.belongs_to_collection.id;
    const collectionRaw = await axios.get(
      `https://api.themoviedb.org/3/collection/${collectionId}/images?api_key=${api_key}`
    );
    const collections = await collectionRaw.data;
    imagesData = { ...imagesData, images: collections };
  }

  return { 
  backdrops: imagesData.images.backdrops,
  posters: imagesData.images.posters
  };
}

async function getMovieWriter(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=en-US`
  );
  const crew = response.data;

  return crew.cast.find(
    (member) => member.job === "Writer" && member.department === "Writing"
  );
}

async function getMovieDirector(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=en-US`
  );
  const crew = response.data.crew;

  return crew.find(
    (member) => member.job === "Director" && member.department === "Directing"
  );
}
async function getMovieVideos(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`
  );
  return response.data.results;
}

async function getMovieMainActors(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=en-US`
  );
  const crew = response.data.crew;

  return crew.slice(0, 3);
}

async function getMovieDetails(id) {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
  );
  const movieDetails = await response;

  return movieDetails.data;
}

export {
  getMovieDetails,
  getMovieDirector,
  getMovieVideos,
  getMovieMainActors,
  getMovieWriter,
  getMovieImages,
};
