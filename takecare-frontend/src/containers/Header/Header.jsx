import React, { useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, userData } from "../Login/loginSlice";
import { Button, Container, Row, Col, FormText } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import takecare from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const userReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();

  const exitThis = () => {
    dispatch(logout({ token: "", user: {} }));

    return navigate("/");
  };

  if (userReduxCredentials?.token !== "") {
    return (
      <div className="headerDesign">
        <Button
          onClick={() => navigate("/userarea")}
          className="linkDesign animeButton"
          style={{
            background: "white",
            color: "black",
            marginRight: "1em",
            borderRadius: 50,
            fontFamily: "Fredoka One",
            borderColor: "black",
          }}
        >
          {userReduxCredentials?.user?.name}
        </Button>
        <Link to="/">
          <Image src={takecare} fluid></Image>
        </Link>
        <Button
          onClick={() => exitThis()}
          className="linkDesign animeButton"
          style={{
            background: "white",
            color: "black",
            borderRadius: 50,
            borderColor: "black",
            fontFamily: "Fredoka One",
          }}
        >
          Logout
        </Button>
      </div>
    );
  } else {
    return (
      <div className="headerDesign">
        <Button
          onClick={() => navigate("/login")}
          className="linkDesign animeButton"
          style={{
            background: "white",
            color: "black",
            borderRadius: 50,
            borderColor: "black",
            fontFamily: "Fredoka One",
          }}
        >
          Login
        </Button>
        <Link to="/">
          <Image src={takecare} fluid></Image>
        </Link>
        <Button
          onClick={() => navigate("/register")}
          className="linkDesign animeButton"
          style={{
            background: "white",
            color: "black",
            borderRadius: 50,
            borderColor: "black",
            fontFamily: "Fredoka One",
          }}
        >
          Register
        </Button>
      </div>
    );
  }
};

export default Header;
