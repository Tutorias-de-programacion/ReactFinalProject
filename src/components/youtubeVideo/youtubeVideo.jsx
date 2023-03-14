const YoutubeVideo = ({videoKey}) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoKey}?controls=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeVideo;
