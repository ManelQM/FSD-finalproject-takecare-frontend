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

    <section  style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer fluid className="py-5 h-100">
        <MDBRow  className="justify-content-center align-items-center h-100">
          <MDBCol  lg="" className="mb-4 mb-lg-0">
            <MDBCard className="cardDesign animeButton" style={{ borderRadius: '.5rem',width:"20em",height:"25em" }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage variant="top" src={colorhearthand}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5"></MDBTypography>
                  <MDBCardText></MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Name and Surname</MDBTypography>
                        <MDBCardText className="text-muted">{userProfile.name} {userProfile.surname}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Nickname</MDBTypography>
                        <MDBCardText className="text-muted">{userProfile.nickname}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6"></MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{userProfile.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted">{userProfile.city}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  

            </div>
        )
    }

    export default Profile; 


    