import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {usersReq } from "../../../services/apiCalls";
import { addUsers, setError } from "../AdminSlice";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../AdminUsers/AdminUsers.css";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //HOOKS

  const [users, setUsers] = useState ([]);

  useEffect(() => {
    if (users.length === 0) {
      usersReq()
      .then ((res) => {
        setUsers (res.users);
      })
      .catch((error) => error);
    }
  },[users]);

  const clickedUser = (users) => {
    dispatch(addUsers({ ...users, details: users }));

    setTimeout(() => {
      navigate("/adminarea");
    }, 750);
  };
  return (
    <div fluid className="adminUsersDesign">
      <Container
        fluid
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Row
          md={6}
          className="row"
          fluid
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "3em",
          }}
        >
          {users.length > 0 && (
            <Col fluid md={6} style={{}}>
              {users.slice(0, 20).map((user) => {
                return (
          <Card style={{ width: "18rem" }}>
            <Card.Body key={user.id}>
              <Card.Title> Name:{user.name} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Surname : {user.surname}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Nickname : {user.nickname}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Email: {user.email}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">City:{user.city}</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
                )
              })}
              </Col>
            )}
        </Row>
      </Container>
    </div>
  );
};

export default AdminUsers;
