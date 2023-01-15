import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {publicationsReq} from "../../services/apiCalls";
import {useSelector, useDispatch} from "react-redux";
import "./Publications.css";
import {addPublication, publicationData} from "../Publications/publicationsSlice"
import {Col,Card,Row,Button,Container} from 'react-bootstrap';


const Publications = () => {

    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 

    //HOOKS

    const [publications, setPublications] =useState([]);

    useEffect(() => {

        if (publications.length === 0) {
            
            publicationsReq()
                .then(publications => {

                    setPublications(publications)
                })
                .catch (error => console.log(error))
        }

    },[]); 

        const clickedPublication = (publication) => {

            dispatch(addPublication({...publication,details:publication}));
        }

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