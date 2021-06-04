import React from "react";
import {Card, Button} from "react-bootstrap";
import MoveiCards from "./MovieCards";

const NowPlayingMovies = ({nowPlaying}) => {
  return (
    <div className="appcontainer">
      <h1 className="now-title">Now Playing</h1>
      <MoveiCards nowPlaying={nowPlaying} />
    </div>
  );
};

export default NowPlayingMovies;
