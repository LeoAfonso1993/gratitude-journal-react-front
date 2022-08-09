import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container} from 'react-bootstrap';

function NavBar() {
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">BGrateful</Navbar.Brand>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar;
