import React, { useState } from "react";

const MovieCards = ({ nowPlaying }) => {
  const cardImageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const movieOne = nowPlaying[0];
  const movieTwo = nowPlaying[1];
  const movieThree = nowPlaying[2];
  const movieFour = nowPlaying[3];

  return (
    <section className="card-container">
      <div className="movie-card">
        <img
          src={cardImageBaseUrl + movieOne.poster_path}
          className="card-image"
        />
        <div className="movie-card-text">
          <h3 style={{ fontWeight: "lighter" }}>{movieOne.title}</h3>
        </div>
      </div>
      <div className="movie-card">
        <img
          src={cardImageBaseUrl + movieTwo.poster_path}
          className="card-image"
        />
        <div className="movie-card-text">
          <h3 style={{ fontWeight: "lighter" }}>{movieTwo.title}</h3>
        </div>
      </div>
      <div className="movie-card">
        <img
          src={cardImageBaseUrl + movieThree.poster_path}
          className="card-image"
        />
        <div className="movie-card-text">
          <h3 style={{ fontWeight: "lighter" }}>{movieThree.title}</h3>
        </div>
      </div>
      <div className="movie-card">
        <img
          src={cardImageBaseUrl + movieFour.poster_path}
          className="card-image"
        />
        <div className="movie-card-text">
          <h3 style={{ fontWeight: "lighter" }}>{movieFour.title}</h3>
        </div>
      </div>
    </section>
  );
};

export default MovieCards;
