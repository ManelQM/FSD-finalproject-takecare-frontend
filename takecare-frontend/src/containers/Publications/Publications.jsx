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
    // const limitPublications = publications.slice(0,4);

    useEffect(() => {

        
        if (publications.length === 0) {
            
            publicationsReq()
                      // publications 
                .then( res=> {
                  setPublications(res.publications)      
                })
                .catch (error => (error))
         } 

    },[publications]); 
    console.log (publications, "satanas")
    // const limitPublications = publications.slice(0,4);
        const clickedPublication = (publications) => {

            dispatch(addPublication({...publications,details:publications}));

            setTimeout(() => {
                navigate("/services");
            },750);
    
        } 
  
   
    return (
        
        <div className="publicationsDesign">
         
        <Container fluid>
            <Row className="d-flex justify-content-center">
            {
                publications.length > 0 &&
                                    
                <Col className="col-9 col-md-6 d-flex justify-content-center align-items-center">
                     <Card style={{ width: '30rem'}} className="publicationsDesign">
                        {
                            publications.slice(0,4).map( 
                                publications => { 
                                  return (   
                        <Card.Body>
                          <Card.Title >Title: {publications.title}</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted">Nickname: {publications.nickname}</Card.Subtitle>
                            <Card.Text>
                            {publications.text}
                            </Card.Text>
                            <Button href="#" onClick={()=>clickedPublication(publications)} key={publications.id}className="cardButton" >Select Service</Button>
                        </Card.Body>
                                  )
                                }
                            )   
                    }
                    </Card>
                </Col>
                }
             </Row> 
          </Container>
        </div>
      )
            
}

export default Publications; 