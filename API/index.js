import express, { response } from "express";
import axios from "axios";
import cors from "cors";
import * as dotenv from "dotenv";
const port = process.env.PORT || 5000;
const app = express();
dotenv.config();
const api_key = process.env.TMDB_API_KEY;

app.use(cors());
app.get("/movie:id", (req, res) => {
  axios.get(`https://api.themoviedb.org/3/movie:${req.params.id}?api_key=${api_key}&language=en-US`)
    .then(serverResponse => {
        const answ = serverResponse;
        res.json(answ.data)
    });
});

app.listen(port, () => {
  console.log(`Backend Running on port:${port}`);
});
