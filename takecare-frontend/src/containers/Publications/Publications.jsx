import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {publicationsReq} from "../../services/apiCalls";
import {useSelector, useDispatch} from "react-redux";
import "./Publications.css";
import {addPublication, publicationData} from "../Publications/publicationsSlice"
import {Col,Card,Row,Button,Container,} from 'react-bootstrap';


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
    console.log (publications, "Estas son las publicaciones")
    // const limitPublications = publications.slice(0,4);
        const clickedPublication = (publications) => {

            dispatch(addPublication({...publications,details:publications}));

            setTimeout(() => {
                navigate("/services");
            },750);
    
        } 
  
   
    return (
        
        <div className="publicationsDesign">
         
        <Container fluid style={{alignItems:"center", justifyContent:"center"}}>
    
            <Row md={6} className="row" fluid style={{alignItems:"center", justifyContent:"center"}}>
                
            {
                publications.length > 0 &&                        
                <Col fluid md={6} style={{}}>
                     <Card className="publicationsDesign">
                        {
                            publications.slice(0,5).map( 
                                publications => { 
                                  return (   
                        <Card.Body style={{}}>
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