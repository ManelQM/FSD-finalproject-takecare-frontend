import React from "react";
import './UserArea.css';
import {Col,Card,Row,Button} from 'react-bootstrap'

const UserArea = () => {
    return (
        
        

<Row xs={1} md={5} className=" cardDesign g-4 d-flex justify-content-center align-items-center column" >
      {Array.from({ length:4}).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160"/>
            <Card.Body>
              <Card.Title>Profile Services Contracts Publications</Card.Title>
              <Card.Text >
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text >
              <Button className="butonDesign"></Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

       
    )
}

export default UserArea; 