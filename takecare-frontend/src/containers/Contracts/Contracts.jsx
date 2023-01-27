import React, {useState, useEffect} from "react";
import "./Contracts.css";
import {useNavigate} from "react-router-dom";
import { contractsReq } from "../../services/apiCalls";
import { useSelector,useDispatch } from "react-redux";
import { addContract} from "../Contracts/ContractsSlice";
import { Col, Card, Row, Button, Container } from "react-bootstrap";

const Contracts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        if (contracts.length === 0) {
            contractsReq()
            .then((res) => {
                setContracts(res.contracts);
            })
            .catch((error) => error);
        }
    }, [contracts]);
    console.log(contracts, "Sean los contratos divinos");

    const clickedContract = (contracts) => {
        dispatch(addContract({ ...contracts, details: contracts}));
        
        setTimeout(() => {
            navigate ("/mycontracts");
        }, 750);
    }; 
  return (
    <div className="contractsDesign">
      <Container
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Row
          md={6}
          className="row"
          
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {contracts.length > 0 && (
            <Col  md={6} style={{}}>
              <Card className="contractsDesign" style={{ width:"20em"}}>
                {contracts.slice(0, 20).map((contracts) => {
                  return (
                    <Card.Body style={{ marginBottom: "1em", width:"20em"}}>
                      <Card.Title>Title: </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        User ID: {contracts.userid}
                      </Card.Subtitle>
                      <Card.Text>Publication ID: {contracts.publicationid}</Card.Text>
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

export default Contracts;
