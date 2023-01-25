import "./CreatePublications.css";
import { userData } from "./../Login/loginSlice";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { newPublication } from "../../services/apiCalls";

const CreatePublications = () => {
  const userCredentials = useSelector(userData);
  const navigate = useNavigate();

  const [publication, setPublication] = useState({
    title: "",
    nickname: "",
    text: "",
  });

  const [publicationError, setPublicationError] = useState({
    titleError: "",
    companynameError: "",
    textError: "",
  });

  const inputHandler = (e) => {
    // e.preventDefault();
    // console.log(e, "vaya cosa");

    setPublication((prevState) => ({
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

  const createNewPublication = async (e) => {
    e.preventDefault();
    try {
      console.log(
        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        publication
      );
      let createPublication = {
        title: publication.title,
        nickname: publication.nickname,
        text: publication.text,
        userid: 1,
        fulljourney: true,

      };
      console.log(createPublication);
      let resp = await newPublication(createPublication);
      console.log(resp);
      setMessage("Publicación creada");

      return resp;
    } catch (error) {}
  };

  return (
    <div className="createDesign">
      <Form>
        <Form.Group className="formTitle" style={{ width: "20em" }}>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Ingrese un título"
            onChange={inputHandler}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Group>

        <Form.Group className="formNickname">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            type="text"
            name="nickname"
            placeholder="Ingrese un nickname"
            onChange={ inputHandler}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Group>

        <Form.Group className="formText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            name="text"
            type="text"
            as="textarea"
            rows="6"
            placeholder="Ingrese un texto"
            onChange={(e) => inputHandler(e)}
            onBlur={(e) => errorHandler(e)}
          />
        </Form.Group>
        <Button
          className="animeButton"
          variant="primary"
          type="submit"
          onClick={createNewPublication}
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
      </Form>
    </div>
  );
};

export default CreatePublications;
