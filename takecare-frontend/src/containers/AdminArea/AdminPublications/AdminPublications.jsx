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
              <Card className="publicationsDesign" style={{}}>
                {publications.slice(0, 20).map((publications) => {
                  return (
                    <Card.Body
                      key={publications.id}
                      style={{ marginBottom: "1em" }}
                    >
                      <Card.Title>Title: {publications.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Nickname: {publications.nickname}
                      </Card.Subtitle>
                      <Card.Text>{publications.text}</Card.Text>
                    </Card.Body>
                  );
                })}
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AdminPublications;
