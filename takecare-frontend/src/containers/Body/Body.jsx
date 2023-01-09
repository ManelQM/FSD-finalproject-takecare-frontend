
import React from "react"; 
import "./Body.css"; 
import {Route,Routes} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register"; 

const Body = () => {
    return (
        <div className="classbody">
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/login" element={<Login/>}/>
                <Route path = "/register" element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default Body;