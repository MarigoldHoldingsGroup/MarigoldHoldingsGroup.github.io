import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Home.css';


function Home(){
    return(
        <Container>
            <Container fluid="sm" style={{marginTop: '10%'}}>
                <Row className="justify-content-center">
                    <Col md="auto" className="justify-content-center" style={{textAlign: "center"}}>
                        <img src="/images/IMG_0127.png" width={"338px"} height={"338px"}/>
                    </Col>
                    <Col md="auto" className="d-flex justify-content-center align-items-center">
                        <div style={{textAlign: "center"}}>
                            <h1>Marigold Holdings<br/>Group Ltd.</h1>
                            <h4 className="blueHue">A brighter future.</h4>
                            <Button>Join Us</Button>
                            <span> </span>
                            <Button variant="secondary">Learn more</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{marginTop: '5%'}}>
                    <Col sm={8} className="d-flex justify-content-center align-items-center" style={{textAlign: "center"}}>
                        <div>
                            <h1>Cultivating Equity, Fostering Growth</h1>
                            <p className="blueHue">Established in 2024, Marigold Holdings Group Ltd. embodies a vision dedicated to cultivating equity and fostering growth. With a steadfast commitment to strategic investment and diversified portfolios, we stand as a beacon of stability and opportunity in the ever-evolving landscape of business. Through prudent stewardship and unwavering integrity, we empower businesses to flourish and individuals to thrive, ensuring a brighter future for generations to come.</p>
                            <Button>Explore our holdings</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home;