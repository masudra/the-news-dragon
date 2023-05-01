import React from 'react';
import Footer from '../Pages/Sheird/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Sheird/LeftNav/LeftNav';
import RightNav from '../Pages/Sheird/RightNav/RightNav';
import Header from '../Pages/Sheird/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={3}>
            <LeftNav></LeftNav> 
        </Col>

        <Col lg={6}>
            <h1>This is main content</h1>

        </Col>

        <Col lg={3}>
            <RightNav></RightNav>
         </Col>
      </Row>
    </Container>
        
            
        </div>
    );
};

export default Main;