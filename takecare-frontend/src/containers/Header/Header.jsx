
        import React, {useEffect} from "react";
        import "./Header.css";
        import {useNavigate} from 'react-router-dom';
        import { useSelector, useDispatch } from "react-redux";
        import { logout, userData } from "../Login/loginSlice";

        
        const Header = () => {

          const navigate = useNavigate();

          const userReduxCredentials = useSelector(userData); 
          const dispatch = useDispatch();

          // useEffect(()=>{
          //   console.log("que tienesss", userReduxCredentials);
          // })

          const exitThis = () => {

            dispatch(logout({ token: '', user: {} }))

            return navigate("/");
    
        }
        
          if (userReduxCredentials?.token !== '') {
    
            return (
                <div className='headerDesign'>
                    {/* <input className="inputDesign" type="text" name="criteria" placeholder="search a film" onChange={(e) => criteriaHandler(e)} /> */}
                    <div onClick={() => navigate("/profile")} className="linkDesign">My profile: {userReduxCredentials?.user?.name}</div>
                    <div onClick={() => exitThis()}className="linkDesign">logout</div>
                </div>
            )
        } else {
    
            return (
                <div className='headerDesign'>
                    <input className="inputDesign" type="text" name="criteria" placeholder="search a film" onChange={(e) => criteriaHandler(e)} />
                    <div onClick={() => navigate("/login")} className="linkDesign">Login</div>
                    <div onClick={() => navigate("/register")} className="linkDesign">Register</div>
                </div>
            )
        }
        };

        export default Header; 








         {/* <Link to="/" className="logo"
          style={{
          marginTop:"2em",
          marginLeft: "5em",
          height:"10em",
          width:"20em",
          
          }}>
       
            <Image className="brandLogo" src={logo}></Image>
          </Link> */}
        
          {/* <Space> */}
            {/* <Link to="./login">
              <Button 
              className="loginButton button" 
              style={{
                color:"black",
                background: "white",
                }}
              >
                Login
              </Button>
            </Link>
            <Link to="./register">
              <Button className="registerButton button" type="primary" style={{
                color:"black",
                background: "white",
                borderBlockColor:"green"
              }}>
                Register
              </Button>
            </Link> */}
          {/* </Space> */}
        
      
          // <div>
          {/* <Space>
            <Link to="../user-area">
              <Button type="primary">User Area</Button>
            </Link>
            <Button
              type="primary"
              // When logout is clicked, state is cleaned, logged in hook is falsified and app is navigated to "/"
            
            >
              Logout
            </Button>
          </Space> */}
        {/* </div> */}
      
     
        {/* <Link to="../admin-area">
          <Button type="primary" className="adminButton">
            Admin Area
          </Button>
        </Link> */}
    