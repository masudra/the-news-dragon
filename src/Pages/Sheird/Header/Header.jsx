import React from 'react';
import logo from  '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar,  } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container>
        <div className='continer'>
            <div className="text-center">
            <img src={logo} alt="" />
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <h4>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h4>
            </div>

            <div className="d-flex ml-10 ">
            <Button variant="danger">Leates</Button>
            <Marquee className='text-danger'>
  I can be a React component, multiple React components, or just some text.
</Marquee>
            </div>
        </div>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Carier</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >Pofile</Nav.Link>
            <Nav.Link eventKey={2} >
            <Button variant="secondary">Login</Button>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;