import "./Home.css"; 
import React from "react";
import { Container,Row,Col } from "react-bootstrap";


const Home =() => {
    return ( 
    <div className="homeDesign">
        
        <Container>
        <Row>
        <Col sm={8} className="textDesing" >WELCOME TO TAKECARE</Col>
        
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
          

        </Container>
    
    </div>
    )
}









export default Home; 