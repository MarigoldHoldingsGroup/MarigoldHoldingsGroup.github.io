import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./CustomNavbar.css";

function CustomNavbar(){
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navtheme">
      <Container>
        <Navbar.Brand className="navtext" href="#home">
          <img
            alt=""
            src="/images/IMG_0127.png"
            width="30"
            height="30"
            className="d-inline-block align-top logo"
          />{' '}
          Marigold Holdings Group Ltd.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ marginLeft: 'auto'}}>
            <Nav.Link className="navtext" href="#deets">About</Nav.Link>
            <Nav.Link className="navtext" eventKey={2} href="#memes">Holdings</Nav.Link>
            <Nav.Link className="navtext" eventKey={3} href="#memes">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

