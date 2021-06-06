import React, { useEffect, useState } from "react";
// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Home from "./components/Home";

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        // gets movies now playing
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3d349ab876628dc82a19513484e5220b&language=en-US&page=1"
      );
      setNowPlaying(result.data.results);
    };
    fetchItems();
  }, []);

  console.log(nowPlaying);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Home path="/" exact component={Home} nowPlaying={nowPlaying} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
