
        import React from "react";
        import "./Header.css";
        import {Link} from "react-router-dom"; 
        // import { Button, Space, ConfigProvider } from "antd";
        import { Col, Row } from 'antd';
        // import { Image } from 'antd';
        import Image from "react-bootstrap/Image";
        import logo from "../../assets/logo.png"
        import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";


        const Header = () => {
            return (
                <div className="headerDesign"
                style={{ display: "flex",
                alignItems:"center",
                justifyContent: "space-around",
                height: "15vh",
                width: "100vw",
                flexFlow:"row",
                 }}>
                  <Link to="./login">
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
            </Link>
                <Navbar collapseOnSelect expand="lg">
                
                  <Navbar.Brand >
                  <Image className="brandLogo" src={logo}></Image>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="m-auto">
                    <Nav className="fw-bold m-auto text-center linkDesign">
                      Publications
                    </Nav>
                    
                    <Nav
                      className="fw-bold mx-auto mt-1 mb-md-1 text-center">
                     Philosophy
                    </Nav>

                    <Form className="formDesign d-flex mt-1 mb-md-1 m-auto">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        id="inputDesign"
                        aria-label="Search"/>
                      <Button id="buttonDesign">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="black"
                          className="bi bi-search"
                          viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </Button>
                    </Form>
                    <Nav className="fw-bold mx-auto mt-1 mb-md-1 text-center linkDesign">
                    </Nav>
                  </Navbar.Collapse>
                
              </Navbar>
                  
                </div>
            );
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
    