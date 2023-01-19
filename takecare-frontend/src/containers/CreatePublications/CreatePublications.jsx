import "./CreatePublications.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Form,Container,Row,Col,Button}from "react-bootstrap";
import {newPublication}from "../../services/apiCalls";

const CreatePublications = () => {
    // const navigate = useNavigate();
    // const [title, setTitle, handleTitleChange] = useInpuntHandler("");
    // const [nickname,setnickname,handleNicknameChange] = useInputHandler("");
    // const [text,setText,handleTextChange] =useInpuntHandler("");
    // const [message,setMessage] = useState(""); 
    
    


        

    return (
        <div className="createDesign">
             <Form>
      <Form.Group className="formTitle" style={{width:"20em"}}>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un título" />
      </Form.Group>

      <Form.Group className="formNickname">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un nickname" />
      </Form.Group>

      <Form.Group className="formText">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows="6" placeholder="Ingrese un texto" />
      </Form.Group>
      <Button className="animeButton" variant="primary" type="submit" 
      style={{
      backgroundColor:"white",
      color:"black",
      fontFamily:"Fredoka One",
      borderRadius:50,
      marginTop:"1em",
      borderColor:"black"}}>
            Create Publication
        </Button>
    </Form>

        </div>
    )
}


export default CreatePublications