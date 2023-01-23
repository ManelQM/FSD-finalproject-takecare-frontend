import React from "react";
import './AdminArea.css'; 
import {Col,Card,Row,Button,Container} from 'react-bootstrap';
import kawaimannurse from  '../../assets/kawainmannursebig.png';
import shakinghands from '../../assets/shakinghands.png';
import mypublications from '../../assets/contactus.png';
import services from '../../assets/handswithelderly.png';
import { Link } from "react-router-dom";

const AdminArea = () => {
    return (
       
           
      <Container>
      <Row className="">
        <Col style={{}} >
        <Card style={{}} className="cardDesign animeButton">
          <Card.Img variant="top" src={kawaimannurse} className="d-flex align-items-center" />
          <Card.Body>
            <Card.Title>My Profile</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link>
            <Button className="animeButton" variant="primary"
            style={{
              backgroundColor:"white",
              color:"black",
              fontFamily:"Fredoka One",
              borderRadius:50,
              marginTop:"1em",
              borderColor:"black"}}>Profile</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      <Col style={{}}>
        <Card style={{}} className="cardDesign animeButton">
          <Card.Img variant="top" src={shakinghands} className="d-flex align-items-center" />
          <Card.Body>
            <Card.Title>My Contracts</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link>
            <Button className="animeButton" variant="primary"
            style={{
              backgroundColor:"white",
              color:"black",
              fontFamily:"Fredoka One",
              borderRadius:50,
              marginTop:"1em",
              borderColor:"black"}}>Contracts</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
        <Col style={{}}>
        <Card style={{}} className="cardDesign animeButton">
          <Card.Img variant="top" src={mypublications}className="d-flex align-items-center" />
          <Card.Body>
            <Card.Title>Publications</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/publications">
            <Button className="animeButton" variant="primary"
            style={{
              backgroundColor:"white",
              color:"black",
              fontFamily:"Fredoka One",
              borderRadius:50,
              marginTop:"1em",
              borderColor:"black"}}>Publications</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
        <Col style={{}}>
        <Card style={{}} className="cardDesign animeButton">
          <Card.Img variant="top" src={services} className="d-flex align-items-center" />
          <Card.Body>
            <Card.Title>My Services</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link>
            <Button className="animeButton"variant="primary"
            style={{
              backgroundColor:"white",
              color:"black",
              fontFamily:"Fredoka One",
              borderRadius:50,
              marginTop:"1em",
              borderColor:"black"}}>Services</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
       
    )
}; 

export default AdminArea; 

