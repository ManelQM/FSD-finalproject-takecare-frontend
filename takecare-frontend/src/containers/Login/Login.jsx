import React, { useState } from 'react';
import "./Login.css"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./loginSlice";
import { Button, Form, Input, } from "antd";
import { Container } from 'react-bootstrap';
import { decodeToken } from "react-jwt";
import { loginUser } from '../../services/apiCalls';



const Login = () => {
        
    const [messageText, setMessageText] = useState({ message: "" });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async values => {
            let res = await loginUser(values);
            if (res == "Invalid E-mail or password.") {
            setMessageText({
                message: res,
            });
            } else {
                console.log (res)
            let decoded = decodeToken(res.jwt);

            let idrolenavigate = decoded.role
            
            let userCredentials = {
                token: res, 
                user: decoded 
            }

            dispatch(login(userCredentials));
            
            if (idrolenavigate == "user") {
                navigate("../userarea");
            } else if (idrolenavigate == "admin" ) {
                navigate("../adminarea");
            } else {
                setMessageText({
                message: "This is weird",
                });
            }
            }

    };

    const onFinishFailed = errorInfo => {};
        
    return (
        <div className="loginDesign">
            
            <Form
                name="basic"
                style={{
                width: "20em",
                height: "20em",
                marginTop: "5em",
                marginRight: "5em",
            }}
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                type: "email",
                className: "email",
                message: (
                    <div style={{ color: "black",fontFamily:"Fredoka One" }}>
                    The input is not valid E-mail!
                    </div>
                ),
                },
                {
                required: true,
                message: (
                    <div style={{ color: "black",fontFamily:"Fredoka One" }}>Please input your E-mail!</div>
                ),
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: (
                    <div style={{ color: "black", fontFamily:"Fredoka One" }}>
                    Please input your password!
                    </div>
                ),
                },
            ]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" className='animeButton' htmlType="submit"
            style={{
                backgroundColor:"white",
                color:"black",
                fontFamily:"Fredoka One",
                borderRadius:50,
                marginTop:"1em",
                borderColor:"black"}}>
                Submit
            </Button>
            </Form.Item>
        </Form>
        
        <div className="messageText">{messageText.message}</div>
        
            </div>   
    )
};

export default Login; 