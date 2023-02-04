import express from "express";
import {
  getMovieDetails,
  getMovieDirector,
  getMovieImages,
  getMovieMainActors,
  getMovieVideos,
  getMovieWriter,
} from "./requesters.mjs";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  Promise.all([
    getMovieDetails(id),
    getMovieDirector(id),
    getMovieVideos(id),
    getMovieWriter(id),
    getMovieMainActors(id),
    getMovieImages(id),
  ]).then(([movieDetails, director, videos, writer, stars, images]) => {
    res.json({
      id: movieDetails.id,
      title: movieDetails.original_title,
      overview: movieDetails.overview,
      main_poster: `http://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`,
      images,
      director,
      videos,
      writer,
      stars,
    });
  });
});

app.listen(port, () => {
  console.log(`Backend Running on port:${port}`);
});
