import React from "react";

const MovieCards = ({nowPlaying}) => {
  const cardImageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <section className="card-container">
      <div className="movie-card">
        <img src={cardImageBaseUrl + nowPlaying[0].poster_path} className="card-image" />
        <div className="movie-card-text">
          <h3 style={{fontWeight: "lighter"}}>{nowPlaying[0].title}</h3>
        </div>
      </div>
      <div className="movie-card">
        <img src={cardImageBaseUrl + nowPlaying[0].poster_path} className="card-image" />
        <div className="movie-card-text">
          <h3 style={{fontWeight: "lighter"}}>{nowPlaying[0].title}</h3>
        </div>
      </div>
      <div className="movie-card">
        <img src={cardImageBaseUrl + nowPlaying[0].poster_path} className="card-image" />
        <div className="movie-card-text">
          <h3 style={{fontWeight: "lighter"}}>{nowPlaying[0].title}</h3>
        </div>
      </div>
      <div className="movie-card">
        <img src={cardImageBaseUrl + nowPlaying[0].poster_path} className="card-image" />
        <div className="movie-card-text">
          <h3 style={{fontWeight: "lighter"}}>{nowPlaying[0].title}</h3>
        </div>
      </div>
    </section>
  );
};

export default MovieCards;
