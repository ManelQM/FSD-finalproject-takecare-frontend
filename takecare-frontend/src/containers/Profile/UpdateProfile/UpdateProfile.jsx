import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "./../../Login/loginSlice";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { updateProfile } from "../../../services/apiCalls";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const userRdxData = useSelector(userData);
  const [messageSuccess, setMessageSuccess] = useState([""]);

  const [updateActiveUser, setActiveUserUpdate] = useState({
    name: "",
    surname: "",
   
  });

  const [updateActiveUserError, setActiveUserUpdateError] = useState({
    nameError: "",
    surnameError: "",
  
  });


  const inputHandler = (e) => {
    setActiveUserUpdate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
       
    }));
  };

  const errorHandler = (e) => {
    let error = "";

    // error = errorCheck(e.target.name, e.target.value);

    // if(e.target.name === "nickname"){
    //     if(publication.nickname !== publication.nickname){
    //         error = ""
    //     }
    // }

    // setPublicationError((prevState)=>({...prevState,
    //     [e.target.name + 'Error'] : error
    // }));
  };

  useEffect(() => {
    if (messageSuccess !== "") {
      setMessageSuccess("");
    }
  }, []);

  const makeUpdatedUser = () => {
    
    let createUpdate = {
      id: userRdxData.user.id,
      name: updateActiveUser.name,
      surname: updateActiveUser.surname,
      nickname: updateActiveUser.nickname,
    };
    
    updateProfile(createUpdate, userRdxData.token.jwt)
  
      .then((result) => {
       
      })
      .catch((error) => console.log(error));

    // setTimeout(() => {
      // navigate("/");
    // }, 1500);
  };

  return (
    <div className="updateDesign">
  
        <Form.Group className="formNickname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Introduce new name"
            onChange={inputHandler}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Group>

        <Form.Group className="formText">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            name="surname"
            type="text"
            as="textarea"
            placeholder="Introduce new surname"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Group>

        {/* <Form.Group className="formText">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            name="nickame"
            type="text"
            as="textarea"
            placeholder="Introduce new nickname"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Group> */}
        <Button
          className="animeButton"
          variant="primary"
          type="submit"
          onClick={makeUpdatedUser}
          style={{
            backgroundColor: "white",
            color: "black",
            fontFamily: "Fredoka One",
            borderRadius: 50,
            marginTop: "1em",
            borderColor: "black",
          }}
        >
          Create!!
        </Button>
       
    </div>
  );
};

export default UpdateProfile;
