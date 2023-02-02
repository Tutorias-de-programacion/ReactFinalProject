import express, { response } from "express";
import axios from "axios";
import cors from "cors";
import * as dotenv from "dotenv";
const port = process.env.PORT || 5000;
const app = express();
dotenv.config();
const api_key = process.env.TMDB_API_KEY;
app.get("/", (req, res) => {
  res.json("Hi bitch");
});
app.use(cors());
app.get("/movie:id", (req, res) => {

  axios.get(`https://api.themoviedb.org/3/movie:${req.params.id}?api_key=${api_key}&language=en-US`)
    .then(serverResponse => {
        const anw = serverResponse;
        res.json(anw.data)
    });
});

app.listen(port, () => {
  console.log(`Backend Running on port:${port}`);
});
