import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import Buttons from "../../components/Buttons/Buttons";
import { useState, useEffect } from "react";

function ImageComponent({ imageData }) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original/${imageData.path}`}
      style={{
        width: "100vw",
        height: `20vh * ${imageData.aspectRatio}`,
        position: "static",
      }}
    />
  );
}

const Viewer = ({ hoveredMovie }) => {
  let filteredPosters = [];
  const [posterCounter, setPosterCounter] = useState(0);

  if (hoveredMovie?.images?.backdrops?.length > 0) {
    filteredPosters = hoveredMovie.images.backdrops
      .filter((poster) => poster.height > 1000 && poster.width > 1000)
      .map((poster) => {
        return {
          path: poster.file_path,
          width: poster.width,
          height: poster.height,
          aspectRatio: poster.aspect_ratio,
        };
      });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (posterCounter < filteredPosters.length - 1) {
        setPosterCounter(posterCounter + 1);
      } else {
        setPosterCounter(0);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [posterCounter, filteredPosters.length]);

  return (
    hoveredMovie && (
      <div style={{ position: "relative" }}>
        <ImageComponent imageData={filteredPosters[posterCounter]} />
      </div>
    )
  );
};

export default Viewer;
