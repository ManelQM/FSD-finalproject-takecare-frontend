
import React from "react"; 
import "./Body.css"; 
import {Route,Routes} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register"; 
import UserArea from "../UserArea/UserArea";
import AdminArea from "../AdminArea/AdminArea";

const Body = () => {
    return (
        <div className="classbody">
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/login" element={<Login/>}/>
                <Route path = "/register" element={<Register/>}/>
                <Route path = "/userarea" element={<UserArea/>}/>
                <Route path="/adminarea" element={<AdminArea/>}/>
            </Routes>
        </div>
    )
}

export default Body;