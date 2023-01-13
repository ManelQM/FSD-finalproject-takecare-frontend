import React from "react";
import './UserArea.css';
import {Col,Card,Row,Button,Container} from 'react-bootstrap'
import kawaimannurse from  '../../assets/kawainmannurse.png'
import shakinghands from '../../assets/shakinghands.png'

const UserArea = () => {
    return (
        <Container fluid>
          <Row className="cardDesign">
        <Card style={{ width: '21rem', height:'20rem', borderRadius:'30px'}}>
          <Card.Img variant="top" src={kawaimannurse} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Row>
        <Row className="cardDesign">
        <Card style={{ width: '21rem', height:'20rem',borderRadius:'30px'}}>
          <Card.Img variant="top" src={shakinghands} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Row>
        </Container>
        
    )
}

export default UserArea; 