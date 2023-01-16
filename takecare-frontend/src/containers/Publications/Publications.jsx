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

    const [publications, setPublications] = useState([]);
    const limitPublications = publications.slice(0,4);

    useEffect(() => {

        if (publications.length === 0) {
            
            publicationsReq()
                .then(publications => {
                    console.log(limitPublications,"hola!")
                   
                    setPublications(limitPublications)
                })
                .catch (error => console.log(error))
        }

    },[]); 

    // const limitPublications = publications.slice(0,4);
        const clickedPublication = (publication) => {

            dispatch(addPublication({...publication,details:publication}));

            setTimeout(() => {
                navigate("/services");
            },750);
    
        }
  if(publications.length === 0) { 
   return (
   <div className="publicationsDesign">
            esto esta vacío 
            </div>
           )
   } else {       
    return (
        
        <div className="publicationsDesign">
         
                            <Container fluid>
            <Row className="d-flex justify-content-center">
            {
                limitPublications.map(
                    
                    publication => {
                        
                        return (
                <Col className="col-9 col-md-6 d-flex justify-content-center align-items-center">
                     <Card style={{ width: '30rem'}} className="publicationsDesign">
                        <Card.Body>
                          <Card.Title >Title: {publication.title}</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted">Nickname: {publication.nickname}</Card.Subtitle>
                            <Card.Text>
                            {publication.text}
                            </Card.Text>
                            <Button href="#" onClick={()=>clickedPublication(publication)} key={publication.id}className="cardButton" >Select Service</Button>
                        </Card.Body>
                    </Card>
                </Col>
                                )
                            }
                        )
                    }
             
            </Row> 
          </Container>

        </div>
    )
  }
}

export default Publications; 