import "./Home.css"; 
import React from "react";
import { Container,Row,Col,Form, FormControl,Card} from "react-bootstrap";
import caregivercolor2 from  '../../assets/newicons/kawainurse.png';



const Home =() => {
    return ( 
        
    <div className="homeDesign">
        <Container fluid  style={{justifyContent:"flex-end"}}>
        <Row  style={{height:"7em",justifyContent:"flex-start"}}>
        <Col md={6} className="textDesing"
        style={{
        fontFamily: 'Fredoka One',
        textAlign:"center",
        fontSize: "4em",
        boxShadow:"yellow",
        alignItems:"center", justifyContent:"center"
        }} >Welcome to TakeCare
        
        <Card.Img style={{height:"4em", width:"4em",marginBottom:"1em"}} variant="top" src={caregivercolor2}/>
        </Col>
        
        <Col md={6} style={{alignItems:"center", justifyContent:"center"}}>
      
      
        </Col>
        <Col md={12} placeholder="search" className="searchDesign rowDesign"
          style={{alignItems:"center", justifyContent:"center",textAlign:"center"}}>
              <Form>
              <FormControl
              type="text"
              placeholder="Looking for ... "/>
            </Form>
             
        </Col>
      </Row>
        </Container>
    </div>
    )
}











export default Home; 