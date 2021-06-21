import React, { useEffect, useState } from "react";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Home from "./components/Home";
import NowPlayingCards from "./components/NowPlayingCards";

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);

  // fetch call for now playing movies
  const getNowPlaying = async () => {
    const temp = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3d349ab876628dc82a19513484e5220b&language=en-US&page=1`)
      .then((res) => res.json());
      // sets nowPlaying to have 4 movies
      setNowPlaying(temp.results.slice(0,4));
  }

  useEffect(() => {
    getNowPlaying()
  }, []);
  console.log(nowPlaying)
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Home path="/" exact component={Home} nowPlaying={nowPlaying} />
          <NowPlayingCards nowPlaying={nowPlaying} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
