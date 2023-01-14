import React from "react";
import "./Publications.css";
import {Col,Card,Row,Button,Container} from 'react-bootstrap';


const Publications = () => {

    return(
        <div className="publicDesign">
          <Container fluid>
            <Row className="d-flex justify-content-center">
                <Col className="col-9 col-md-6 d-flex justify-content-center align-items-center">
                     <Card style={{ width: '30rem'}} className="publicationsDesign">
                        <Card.Body>
                          <Card.Title>Title</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted">Nickname</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button href="#">Select Service</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
          </Container>
        </div>
    )
}

export default Publications; 