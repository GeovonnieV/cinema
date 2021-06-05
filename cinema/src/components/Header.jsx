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
    <div className="appcontainer">
      <Jumbotron fluid className="header-jumbo-div">
        <Container>
            <h1 className="header-welcome">Welcome.</h1>
            <h2 style={{color:"white"}}>Find upcoming, new, and past movies</h2>
            <div className="header-input">
              <InputGroup className="mb-3 whata">
                <FormControl
                  placeholder="Search for a movie.."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-info">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
