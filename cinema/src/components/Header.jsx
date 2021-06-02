import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="container">
      <Jumbotron fluid className="header-jumbo-div">
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
