import React from "react";
import AppNavbar from "./AppNavbar";
// import MoveiCards from "./MovieCards";
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Home = ({ nowPlaying }) => {
  return (
    <div>
      <AppNavbar />
      <div className="appcontainer">
        <Jumbotron fluid className="header-jumbo-div">
          <Container>
            <h1 className="header-welcome">Welcome.</h1>
            <h2 style={{ color: "white" }}>
              Find upcoming, new, and past movies
            </h2>
            <div className="header-input">
              <InputGroup className="mb-3 whata">
                <FormControl
                  placeholder="Search for a movie.."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  // value={searchedMovie}
                  // onChange={updateSearch}
                />
                <InputGroup.Append>
                  <Button variant="outline-info">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Container>
        </Jumbotron>
        {/*  */}
        <div className="appcontainer">
          <h1 className="now-title">Now Playing</h1>
          {/* <MoveiCards nowPlaying={nowPlaying} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
