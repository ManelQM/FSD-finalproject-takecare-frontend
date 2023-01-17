import React from "react";
import './UserArea.css';
import {Col,Card,Row,Button,Container} from 'react-bootstrap';
import kawaimannurse from  '../../assets/kawainmannursebig.png';
import shakinghands from '../../assets/shakinghands.png';
import mypublications from '../../assets/contactus.png';
import services from '../../assets/handswithelderly.png';
import { Link } from "react-router-dom";


  const UserArea = () => {
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
            <Button variant="primary">Profile</Button>
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
            <Button variant="primary">Contracts</Button>
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
            <Button variant="primary">Publications</Button>
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
            <Button variant="primary">Services</Button>
            </Link>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
          
        // <Card style={{ width: '21rem', height:'20rem', borderRadius:'30px'}}>
        //   <Card.Img variant="top" src={kawaimannurse} />
        //   <Card.Body>
        //     <Card.Title>Card Title</Card.Title>
        //     <Card.Text>
        //       Some quick example text to build on the card title and make up the
        //       bulk of the card's content.
        //     </Card.Text>
        //     <Button variant="primary">Go somewhere</Button>
        //   </Card.Body>
        // </Card>
        
        
        // <Card style={{ width: '21rem', height:'20rem',borderRadius:'30px'}}>
        //   <Card.Img variant="top" src={shakinghands} />
        //   <Card.Body>
        //     <Card.Title>Card Title</Card.Title>
        //     <Card.Text>
        //       Some quick example text to build on the card title and make up the
        //       bulk of the card's content.
        //     </Card.Text>
        //     <Button variant="primary">Go somewhere</Button>
        //   </Card.Body>
        // </Card>
        
      
        
    )
}

export default UserArea; 