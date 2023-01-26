import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserArea from "../UserArea/UserArea";
import AdminArea from "../AdminArea/AdminArea";
import Services from "../Services/Services";
import Profile from "../Profile/Profile";
import Publications from "../Publications/Publications";
import Contracts from "../Contracts/Contracts";
import CreatePublications from "../CreatePublications/CreatePublications";

const Body = () => {
  return (
    <div className="classbody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userarea" element={<UserArea />} />
        <Route path="/adminarea" element={<AdminArea />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/createpublications" element={<CreatePublications />} />
      </Routes>
    </div>
  );
};

export default Body;
