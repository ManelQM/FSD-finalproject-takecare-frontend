import "./Home.css"; 
import React from "react";
import { Container,Row,Col,Form, FormControl, Button} from "react-bootstrap";



const Home =() => {
    return ( 
        
    <div className="homeDesign">
        
        <Container style={{justifyContent:"flex-end"}}>
        <Row  style={{height:"7em",justifyContent:"flex-start"}}>
        
        <Col md={6} className="textDesing"
        style={{
        fontFamily: 'Fredoka One',
        textAlign:"center",
        fontSize: "4em",
        }} >Welcome to TakeCare
        </Col>
       
        <Col md={12} placeholder="search" className="searchDesign rowDesign"
        style={{alignItems:"center", justifyContent:"center",textAlign:"center"}}
        >
             <Form>
            <FormControl
              type="text"
              placeholder="Search..."
            />
            <Button style={{marginTop:"1em"}} type="submit">Search</Button>
            </Form>
        </Col>
      </Row>
        </Container>
    </div>
    )
}











export default Home; 