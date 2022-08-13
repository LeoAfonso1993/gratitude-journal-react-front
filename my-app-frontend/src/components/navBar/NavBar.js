import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container} from 'react-bootstrap';
import nav from './NavBar.module.css'

function NavBar() {
    return (
        <>
        <Navbar bg="light" variant="light" className={nav.bar}>
        <Container>
          <Navbar.Brand href="#home"><strong>B</strong>Grateful</Navbar.Brand>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar;
