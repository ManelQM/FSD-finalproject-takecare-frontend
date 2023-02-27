import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allContractsList } from "../../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../Login/loginSlice";
import { Col, Card, Row, Button, Container } from "react-bootstrap";
import { addContract } from "../../Contracts/ContractsSlice";

const AdminContracts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //HOOKS
  const userRdxData = useSelector(userData);
  const [contracts, setContracts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (contracts.length === 0) {
      allContractsList(userRdxData.token.jwt)
        .then((res) => {
          setContracts(res.data);
          console.log(res, "hola");
        })
        .catch((error) => error);
    }
    console.log (contracts,"estoy")
  }, [contracts]);

  return (
    <div fluid className="contractsDesign">
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
                    style={{width:"20em", marginTop: "2em"}}>
                      <Card.Body 
                      key={contract.id}
                      style={{marginBottom: "3em", width: "20em"}}
                      >
                        <Card.Title>Title:</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Publisher: {contract.nickname}
                        </Card.Subtitle>
                        <Card.Text>Title: {contract.title}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Col>
            )}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default AdminContracts;
