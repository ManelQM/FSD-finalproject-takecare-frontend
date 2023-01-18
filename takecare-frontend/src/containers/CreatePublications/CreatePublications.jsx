import "./CreatePublications.css";
import React from "react";
import {Form,Container,Row,Col,Button}from "react-bootstrap";
    import { formToJSON } from "axios";

const CreatePublications = () => {

    return (
        <div className="createDesign">
             <Form>
      <Form.Group className="formTitle" style={{}}>
        <Form.Label>Título</Form.Label>
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
      marginTop:"1em"}}>
            Select Service
        </Button>
    </Form>

        </div>
    )
}


export default CreatePublications