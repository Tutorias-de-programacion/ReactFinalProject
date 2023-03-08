const YoutubeVideo = ({videoKey}) => {
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoKey}?controls=0`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};

export default YoutubeVideo;
