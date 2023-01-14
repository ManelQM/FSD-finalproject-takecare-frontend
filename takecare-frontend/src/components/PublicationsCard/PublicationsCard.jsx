
import React from "react";
import "./PublicationsCard.css";
import {Col,Card,Row,Button,Container} from 'react-bootstrap';

const PublicationsCard = () => {

    return (
        <div className="publicationsCardDesign">
          <Container>
            <Row>
                <Col>
                     <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>Title</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted">Nickname</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                             <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
          </Container>

        </div>
    )
    
}

export default PublicationsCard; 

