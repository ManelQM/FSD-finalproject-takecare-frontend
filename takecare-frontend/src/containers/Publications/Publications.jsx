import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { publicationsReq, newContract } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import "./Publications.css";
import { userData } from "../Login/loginSlice";
import { Col, Card, Row, Button, Container } from "react-bootstrap";

const Publications = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Redux connection

  const userRdxData = useSelector(userData);

  //HOOKS

  const [publications, setPublications] = useState([]);
  const [messageSuccess, setMessageSuccess] = useState([""]);

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

  useEffect(() => {
    if (messageSuccess !== "") {
      setMessageSuccess("");
    }
  }, []);

  const makeContractWithInfo = (selectedPublication) => {
    let dataContract = {
      userid: userRdxData.user.id,
      title: selectedPublication.title,
      nickname: selectedPublication.nickname,
      publicationid: selectedPublication.id,
    };

    newContract(dataContract, userRdxData.token.jwt)
      .then((result) => {
        setMessageSuccess(result.data.message);
      })
      .catch((error) => console.log(error));

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div fluid className="publicationsDesign">
      <Container
        fluid
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Button
          onClick={() => navigate("/createpublications")}
          className="animeButton"
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "white",
            color: "black",
            fontFamily: "Fredoka One",
            borderRadius: 50,
            marginTop: "2em",
            marginBottom: "1em",
            borderColor: "black",
          }}
        >
          Create Publication
        </Button>
        <Button
          onClick={() => navigate("/createpublications")}
          className="animeButton"
          variant="primary"
          type="submit"
          style={{
            backgroundColor: "white",
            color: "black",
            fontFamily: "Fredoka One",
            borderRadius: 50,
            marginLeft: "1em",
            marginTop: "2em",
            marginBottom: "1em",
            borderColor: "black",
          }}
        >
          My Publications
        </Button>

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
                      <Button
                        onClick={() => makeContractWithInfo(publication)}
                        key={publication.id}
                        className="cardButton animeButton"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          fontFamily: "Fredoka One",
                          borderRadius: 50,
                          marginTop: "1em",
                          borderColor: "black",
                        }}
                      >
                        Make Contract
                      </Button>

                      {messageSuccess !== "" && (
                        <div>
                          {`Congratulations ${userRdxData.user.name} .... `}
                          {messageSuccess}
                        </div>
                      )}
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

export default Publications;
