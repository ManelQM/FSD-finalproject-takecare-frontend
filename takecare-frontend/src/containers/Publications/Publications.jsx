import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {publicationsReq,makeContract} from "../../services/apiCalls";
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
        
        <div fluid className="publicationsDesign">
         
        <Container fluid style={{alignItems:"center", justifyContent:"center"}}>
        <Button  onClick={() => navigate("/createpublications")}className="animeButton" variant="primary" type="submit" 
            style={{
            backgroundColor:"white",
            color:"black",
            fontFamily:"Fredoka One",
            borderRadius:50,
            marginTop:"2em",
            marginBottom:"1em",
            borderColor:"black"}}>
            Create Publication
        </Button>
        <Button  onClick={() => navigate("/createpublications")}className="animeButton" variant="primary" type="submit" 
            style={{
            backgroundColor:"white",
            color:"black",
            fontFamily:"Fredoka One",
            borderRadius:50,
            marginLeft:"1em",
            marginTop:"2em",
            marginBottom:"1em",
            borderColor:"black"}}>
            My Publications
        </Button>
    
            <Row md={6} className="row" fluid style={{alignItems:"center", justifyContent:"center"}}>
                
            {
                publications.length > 0 &&                        
                <Col fluid md={6} style={{}}>
                     <Card className="publicationsDesign" style={{}}>
                        {
                            publications.slice(0,10).map( 
                                publications => { 
                                  return (   
                        <Card.Body style={{marginBottom:"1em"}}>
                          <Card.Title >Title: {publications.title}</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted">Nickname: {publications.nickname}</Card.Subtitle>
                            <Card.Text>
                            {publications.text}
                            </Card.Text>
                            <Button href="#" onClick={()=>clickedPublication(publications)} key={publications.id}
                            className="cardButton animeButton" 
                            style={{
                                backgroundColor:"white",
                                color:"black",
                                fontFamily:"Fredoka One",
                                borderRadius:50,
                                marginTop:"1em",
                                borderColor:"black"}}>Make Contract</Button>
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