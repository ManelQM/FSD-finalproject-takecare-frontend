import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { publicationsReq, newContract } from "../../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../Login/loginSlice";
import "../../Publications/Publications.css";
import { addPublication } from "../../Publications/publicationsSlice";
import { Col, Card, Row, Button, Container } from "react-bootstrap";

const AdminPublications = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //HOOKS

  const [publications, setPublications] = useState([]);
  // const limitPublications = publications.slice(0,4);

  useEffect(() => {
    if (publications.length === 0) {
      publicationsReq()
        // publications
        .then((res) => {
          setPublications(res.publications);
        })
        .catch((error) => error);
    }
  }, [publications]);

  // const limitPublications = publications.slice(0,4);
  const clickedPublication = (publications) => {
    dispatch(addPublication({ ...publications, details: publications }));

    setTimeout(() => {
      navigate("/contracts");
    }, 750);
  };

  return (
    <div fluid className="publicationsDesign">
      <Container
        fluid
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Row
          md={6}
          className="row"
          fluid
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {publications.length > 0 && (
            <Col fluid md={6} style={{}}>
              {publications.slice(0, 20).map((publication) => {
                return (
                  <Card
                    className="publicationsDesign"
                    style={{ marginBottom: "2em" }}
                  >
                    <Card.Body
                      key={publication.id}
                      style={{ marginBottom: "2.5em" }}
                    >
                      <Card.Title>Title: {publication.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Nickname: {publication.nickname}
                      </Card.Subtitle>
                      <Card.Text>{publication.text}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AdminPublications;
