import React from "react";
import {
  Jumbotron,
  Container,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <div className="container">
      <Jumbotron fluid className="header-jumbo-div">
        <Container>
            <h1 className="display-1">Welcome.</h1>
            <p>Find upcoming, new, and past movies</p>
            <div className="header-input">
              <InputGroup className="mb-3 whata">
                <FormControl
                  placeholder="Search for a movie.."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="primary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
