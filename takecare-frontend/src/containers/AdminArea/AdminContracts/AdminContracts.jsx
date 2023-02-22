import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { contractsReq } from "../../../services/apiCalls";
import { useSelector,useDispatch } from "react-redux";
import { addContract} from "../../Contracts/ContractsSlice";
import { Col, Card, Row, Button, Container } from "react-bootstrap";

const AdminContracts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        if (contracts.length === 0) {
            contractsReq()
            .then((res) => {
                setContracts(res.contract);
            })
            .catch((error) => error);
        }
    }, [contracts]);
    
    return (
        <div fluid className="contractsDesign">
        <Container
          fluid
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
                  {contracts.slice(0, 20).map((contract) => {
                    return (
                      <Card.Body key={contract.id} style={{ marginBottom: "1em", width:"20em"}}>
                        <Card.Title>Title: </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          User ID: {contract.userid}
                        </Card.Subtitle>
                        <Card.Text>Publication ID: {contract.publicationid}</Card.Text>
                      </Card.Body>
                    );
                  })}
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </div>   
    )
}

export default AdminContracts; 