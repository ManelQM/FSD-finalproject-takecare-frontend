import React, { useState, useEffect } from "react";
import "./Profile.css";
import colorhearthand from "../../assets/newicons/handscolorwithheart.png";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { getProfile } from "../../services/apiCalls";
import { userData } from "../Profile/profileSlice";
import Card from 'react-bootstrap/Card';
const Profile = () => {
  const navigate = useNavigate(); 

  const userReduxCredentials = useSelector(userData);
  const dispatch = useDispatch(); 

if (userReduxCredentials?.token !== "" ) { 
  
  return (  
    
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{userReduxCredentials?.user?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{userReduxCredentials?.user?.nickname}Card Subtitle</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

  );
}
}
export default Profile;


//   const [userProfile, setUserProfile] = useState([]);
//   const navigate = useNavigate();
//   const user = useSelector(userData);
//   const dispatch = useDispatch();
//   const [error, setError] = useState("");
//   const userJWT = JSON.parse(localStorage.getItem("SAVEJWT"));

//   useEffect(() => {
//     if (userProfile.length === 0) {
//       console.log(userProfile, "hola!");
//       getProfile(userJWT)
//         .then((res) => {
//           console.log(res.userProfile);
//           setUserProfile(res.data);
//         })
//         .catch((error) => {
//           setError(error.response?.data);
//         });
//     }
//   }, [userProfile]);
