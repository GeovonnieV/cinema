import React from "react";
import "./styles/app.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Header from "./components/Header";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Header />
    </div>
  );
}

export default App;
