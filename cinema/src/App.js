import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import Header from "./components/Header";
import AppNavbar from "./components/AppNavbar";
import NowPlayingMovies from "./components/NowPlayingMovies";

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=3d349ab876628dc82a19513484e5220b&language=en-US&page=1"
      );
      setNowPlaying(result.data.results);
    };
    fetchItems();
  }, []);

  console.log(nowPlaying)

  return (
    <div className="App">
      <AppNavbar />
      <Header />
      <NowPlayingMovies />
      <NowPlayingMovies />
    </div>
  );
}

export default App;
