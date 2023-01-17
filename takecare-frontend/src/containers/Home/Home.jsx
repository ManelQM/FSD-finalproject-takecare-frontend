import "./Home.css"; 
import React from "react";
import { Container,Row,Col } from "react-bootstrap";



const Home =() => {
    return ( 
    <div className="homeDesign">
        
        <Container style={{justifyContent:"flex-end"}}>
        <Row  style={{height:"7em",justifyContent:"flex-start"}}>
        <Col md={12} className="textDesing" 
        style={{
        fontFamily: 'Fredoka One',
        textAlign:"center",
        fontSize: "2em"
        }} >Welcome to TakeCare</Col>
        <Col md={12} className="searchDesign rowDesign">
            the navbar
        </Col>
      </Row>
        </Container>
    
    </div>
    )
}









export default Home; 