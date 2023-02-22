import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { contractsReq, deleteContract } from "../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../Login/loginSlice";
import { addContract } from "../Contracts/ContractsSlice";
import { Col, Card, Row, Button, Container } from "react-bootstrap";

const Contracts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //RDX data
  const userRdxData = useSelector(userData);

  const [contracts, setContracts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (contracts.length === 0) {
      contractsReq(userRdxData.user.id, userRdxData.token.jwt)
        .then((res) => {
          setContracts(res.data);
        })
        .catch((error) => error);
    }
  }, [contracts]);

  const destroyContract = (contract) => {
    deleteContract(contract.id, userRdxData.token.jwt)
      .then((res) => {
        if (res.message !== "No se ha podido eliminar el contrato") {
          setMessage(res.message);

          setTimeout(() => {
            navigate("/contracts");
          }, 1500);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div  className="contractsDesign">
      {contracts.length > 0 && (
        <Container style={{ alignItems: "center", justifyContent: "center" }}>
          <Row
            md={6}
            className="row"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            {contracts.length > 0 && (
              <Col md={6} style={{}}>
                {contracts.slice(0, 20).map((contract) => {
                  return (
                    <Card
                      className="cardDesign"
                      style={{ width: "20em", marginTop: "2em" }}
                    >
                      <Card.Body
                        key={contract.id}
                        style={{ marginBottom: "3em", width: "20em" }}
                      >
                        <Card.Title>Title: </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Publisher: {contract.nickname}
                        </Card.Subtitle>
                        <Card.Text>Title: {contract.title}</Card.Text>
                      </Card.Body>
                      <Button
                        onClick={() => destroyContract(contract)}
                        className="cardButton animeButton"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          fontFamily: "Fredoka One",
                          borderRadius: 50,
                          width: "10em",
                          marginLeft: "5em",
                          marginBottom: "1em",
                          borderColor: "black",
                        }}
                      >
                        Delete Contract
                      </Button>
                      {message}
                    </Card>
                  );
                })}
              </Col>
            )}
          </Row>
        </Container>
      )}

      {contracts.length === 0 && (
        <div>No contracts yet</div>
      )}
    </div>
  );
};

export default Contracts;
