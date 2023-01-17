import "./Home.css"; 
import React from "react";
import { Container,Row,Col,Form, FormControl,Card} from "react-bootstrap";
import kawainurse from  '../../assets/newicons/kawainurse.png';



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
        
        <Card.Img style={{height:"4em", width:"4em",marginBottom:"1em"}} variant="top" src={kawainurse}/>
        </Col>
        
        <Col md={6} 
        style={{
        alignItems:"center",
        justifyContent:"center",
        fontFamily: 'Fredoka One',
        textAlign:"center",
        fontSize: "2em",
        boxShadow:"yellow",
        }} >Who are we? TakeCare it is a free app for people who needs a Caregiver or people who works as a Caregiver.  
      
      
        </Col>
        {/* <Col md={12} placeholder="search" className="searchDesign rowDesign"
          style={{alignItems:"center", justifyContent:"center",textAlign:"center"}}>
              <Form>
              <FormControl
              type="text"
              placeholder="Looking for ... "
              color="green"/>
            </Form>
             
        </Col> */}
      </Row>
        </Container>
    </div>
    )
}











export default Home; 