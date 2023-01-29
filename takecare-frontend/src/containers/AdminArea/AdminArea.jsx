import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminArea.css";
import { Col, Card, Row, Button, Container } from "react-bootstrap";
import allcontracts from "../../assets/newicons/allcontracts.svg";
import allusers from "../../assets/newicons/admin-users-svgrepo-com (1).svg";
import allpublications from "../../assets/newicons/admin.svg";
import { Link } from "react-router-dom";

const AdminArea = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row
        style={{
          color: "black",
          fontFamily: "Fredoka One",
          justifyContent: "center",
          height: "2em",
          fontSize: "2em",
          alignItems: "center",
          borderColor: "black",
        }}
      >
        {" "}
        Admin Area{" "}
      </Row>
      <Row className="">
        <Col style={{}}>
          <Card
            style={{ width: "20em", marginTop: "1em" }}
            className="cardDesign animeButton"
          >
            <Card.Img
              variant="top"
              src={allcontracts}
              className="d-flex align-items-center"
              style={{ height: "12em", heigh: "1em" }}
            />
            <Card.Body>
              <Card.Title>All Contracts</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/admincontracts">
                <Button
                  className="animeButton"
                  variant="primary"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontFamily: "Fredoka One",
                    borderRadius: 50,
                    marginTop: "1em",
                    borderColor: "black",
                  }}
                >
                  All Contracts
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{}}>
          <Card
            style={{ width: "20em", marginTop: "1em" }}
            className="cardDesign animeButton"
          >
            <Card.Img
              variant="top"
              src={allusers}
              className="d-flex align-items-center"
              style={{ height: "12em", heigh: "1em" }}
            />
            <Card.Body>
              <Card.Title>All Users</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/allusers">
                <Button
                  className="animeButton"
                  variant="primary"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontFamily: "Fredoka One",
                    borderRadius: 50,
                    marginTop: "1em",
                    borderColor: "black",
                  }}
                >
                  All Users
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{}}>
          <Card
            style={{ width: "20em", marginTop: "1em" }}
            className="cardDesign animeButton"
          >
            <Card.Img
              variant="top"
              src={allpublications}
              className="d-flex align-items-center"
              style={{ height: "12em", heigh: "1em" }}
            />
            <Card.Body>
              <Card.Title> All Publications</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/publications">
                <Button
                  onClick={() => navigate("/adminpublications")}
                  className="animeButton"
                  variant="primary"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontFamily: "Fredoka One",
                    borderRadius: 50,
                    marginTop: "1em",
                    borderColor: "black",
                  }}
                >
                  {" "}
                  All Publications
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      
      </Row>
    </Container>
  );
};

export default AdminArea;
