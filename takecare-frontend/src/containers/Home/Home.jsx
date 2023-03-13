import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import kawainurse from "../../assets/newicons/kawainurse.png";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homeDesign">
      <Container fluid style={{ justifyContent: "flex-end" }}>
        <Row style={{ height: "7em", justifyContent: "flex-start" }}>
          <Col
            md={6}
            className="textDesing"
            style={{
              fontFamily: "Fredoka One",
              textAlign: "center",
              fontSize: "4em",
              boxShadow: "yellow",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Welcome to TakeCare
            <Card.Img
              style={{ height: "4em", width: "4em", marginBottom: "1em" }}
              variant="top"
              src={kawainurse}
            />
          </Col>

          <Col
            md={6}
            className="introDesign"
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Fredoka One",
              textAlign: "center",
              fontSize: "2em",
              boxShadow: "yellow",
            }}
          >Discover a range of caregiving services and support on our platform. 
          This is a space where caregivers can connect with families who need their help and viceversa.
          
            <br></br>
            <Button
              fluid
              onClick={() => navigate("/register")}
              className="animeButton"
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "2em",
                fontFamily: "Fredoka One",
                borderRadius: 50,
                marginTop: "1em",
                marginBottom: "1em",
                border: "white",
              }}
            >
              Register here!!
            </Button>
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
  );
};

export default Home;
