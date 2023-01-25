import React from "react";
import "./Profile.css"; 
import colorhearthand from  '../../assets/newicons/handscolorwithheart.png';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getProfile} from "../../services/apiCalls";
import {userData} from "../Profile/profileSlice";


const Profile = () => {
    
        const [userProfile, setUserProfile] = useState([]);
        const navigate = useNavigate()
        const user = useSelector(userData);
        const dispatch = useDispatch();
        const [error, setError] = useState('');
        const userJWT = JSON.parse(localStorage.getItem("SAVEJWT"))
    
        useEffect(() => {
           
    
            if (userProfile.length === 0) {
                console.log (userProfile, "hola!")
                    getProfile(userJWT)
                    .then(
                        (res) => {
                            console.log(res.userProfile)
                            setUserProfile(res.data)
                           
                        }
                    )
                    .catch((error) => {
                        setError(error.response?.data)
                    })
            };
    
    
        }, [userProfile]);
    
    
   
      return (
            <div className="profileDesign">

  

            </div>
        )
    }

    export default Profile; 


    