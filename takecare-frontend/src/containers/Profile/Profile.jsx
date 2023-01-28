import React, { useState, useEffect } from "react";
import "./Profile.css";
import colorhearthand from "../../assets/newicons/handscolorwithheart.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../services/apiCalls";
import { userData } from "../Login/loginSlice";
import Card from "react-bootstrap/Card";
const Profile = () => {
  const navigate = useNavigate();

  const userReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();

  if (userReduxCredentials?.token !== "") {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> Name: {userReduxCredentials?.user?.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Surname : {userReduxCredentials?.user?.surname}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Nickname : {userReduxCredentials?.user?.nickname}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Email : {userReduxCredentials?.user?.email}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            City : {userReduxCredentials?.user?.city}
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
};
export default Profile;
