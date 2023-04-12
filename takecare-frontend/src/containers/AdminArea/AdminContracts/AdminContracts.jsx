import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { allContractsList } from "../../../services/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { Col, Card, Row, Button, Container } from "react-bootstrap";
import { addContract } from "../../Contracts/ContractsSlice";
import { userData } from "../../Login/loginSlice";
const AdminContracts = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //HOOKS
  const userReduxData = useSelector(userData);  
  const [contracts, setContracts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (contracts.length === 0) {
      allContractsList(userReduxData.token.jwt)
        .then((res) => {
          setContracts(res.data);
        })
        .catch((error) => error);
        // console.log("hola")
    }
  }, [contracts]);
  // console.log(contracts, "eeeee") 

  const clickedContract = (contracts) => {
    dispatch(addContract({ ...contracts, details: contracts}));
    setTimeout(() => {
      navigate("/adminarea")
    }, 750); 
  }
  return (
    <div fluid className="contractsDesign">
        <Container fluid style={{ alignItems: "center", justifyContent: "center" }}>
          <Row
            md={6}
            className="row"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            {contracts.length > 0 && (
              <Col fluid md={6} style={{}}>
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
                        <Card.Title>Title: {contract.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Publisher: {contract.nickname}
                        </Card.Subtitle>
                        <Card.Text>userId: {contract.userid}</Card.Text>
                        <Card.Text>publicationId: {contract.publicationid}</Card.Text>
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

export default AdminContracts;
