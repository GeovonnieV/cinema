import React from "react";
import AppNavbar from "./AppNavbar";
import Header from "./Header";
import MoveiCards from "./MovieCards";

const Home = ({ nowPlaying }) => {
  return (
    <div>
      <AppNavbar />
      <Header />
      <div className="appcontainer">
        <h1 className="now-title">Now Playing</h1>
        <MoveiCards nowPlaying={nowPlaying} />
      </div>
    </div>
  );
};

export default Home;
