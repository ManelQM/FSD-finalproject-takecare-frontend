import React, { useState, useEffect } from "react";
import "./Profile.css";
import colorhearthand from "../../assets/newicons/handscolorwithheart.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../services/apiCalls";
import { userData } from "../Login/loginSlice";
import {Card, Button} from "react-bootstrap";

const Profile = () => {
  const navigate = useNavigate();

  const userReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();

  if (userReduxCredentials?.token !== "") {
    return (
      <Card className="cardDesign" style={{ width: "28rem" }}>
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
        </Card.Body>
        <Button 
        onClick={() => navigate("/updateprofile")}
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
          }}> Update Profile </Button>
      </Card>
    );
  }
};
export default Profile;
