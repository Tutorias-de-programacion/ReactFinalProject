import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import Buttons from "../../components/Buttons/Buttons";
import { useState, useEffect } from "react";
function ImageComponent({ imageData }) {
  const [aspectRatio, setAspectRatio] = useState(1);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = `https://image.tmdb.org/t/p/original/${imageData.path}`;
    img.onload = () => {
      const imgAspectRatio = img.width / img.height;
      setAspectRatio(imgAspectRatio);
    };
  }, [imageData]);

  const imgHeight = viewWidth / aspectRatio;

  return (
    <img
      src={`https://image.tmdb.org/t/p/original/${imageData.path}`}
      style={{
        height: imgHeight,
        width: "100%",
        objectFit: "contain",
      }}
    />
  );
}

const Viewer = ({ hoveredMovie, children }) => {
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
    <div style={{ width: "100%" }}>
      {hoveredMovie && (
        <ImageComponent imageData={filteredPosters[posterCounter]} />
      )}
    </div>
  );
};

export default Viewer;
