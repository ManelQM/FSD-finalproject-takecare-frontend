import React, { useState } from 'react';
import "./Login.css"; 
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./loginSlice";
import { Button, Form, Input } from "antd";
import { decodeToken } from "react-jwt";
import { loginUser } from "../../services/loginservice";




        const Login = () => {
            const [messageText, setMessageText] = useState({ message: "" });

                     const dispatch = useDispatch();
                     const navigate = useNavigate();

         const onFinish = async values => {
            // console.log (values,"esa peña");
            let res = await loginUser(values);
                console.log (res,"hola chavales")
            if (res == "Invalid E-mail or password.") {
            setMessageText({
                message: res,
            });
            } else {
            let decoded = decodeToken(res.jwt);

                
            console.log(decoded,"estais listos para la brutalidad???!!!")
           
            let idrolenavigate = decoded.role;
            console.log (res,"hola")
            console.log (idrolenavigate, "esto es el idrolenavigate")
            dispatch(login(res));
                // console.log (res,"hola")
            // Set the raw JWT to localstorage
            localStorage.setItem("JWT", JSON.stringify(res));
            // Set the decoded JWT to localstorage
            localStorage.setItem("UserInfo", JSON.stringify(decodeToken(res)));
            
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
                        <div style={{ color: "black" }}>
                        The input is not valid E-mail!
                        </div>
                    ),
                    },
                    {
                    required: true,
                    message: (
                        <div style={{ color: "black" }}>Please input your E-mail!</div>
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
                        <div style={{ color: "black" }}>
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
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
            <div className="messageText">{messageText.message}</div>
            
                </div>   
            )
            };

        export default Login; 