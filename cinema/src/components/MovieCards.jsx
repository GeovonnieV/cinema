import React from "react";

const MovieCards = ({nowPlaying}) => {
  return (
    <section className="card-container">
      <div className="movie-card">
        <img  className="card-image" />
        <div className="movie-card-text">
          <h4 style={{fontWeight: "lighter"}}>{nowPlaying[0].title}</h4>
        </div>
      </div>
    </section>
  );
};

export default MovieCards;
