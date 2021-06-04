import React from "react";
import {Card, Button} from "react-bootstrap";
import MoveiCards from "./MovieCards";

const NowPlayingMovies = () => {
  return (
    <div className="appcontainer">
      <h1 className="now-title">Now Playing</h1>
      <MoveiCards />
    </div>
  );
};

export default NowPlayingMovies;
