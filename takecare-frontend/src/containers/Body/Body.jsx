import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserArea from "../UserArea/UserArea";
import AdminArea from "../AdminArea/AdminArea";
import AdminUsers from "../AdminArea/AdminUsers/AdminUsers";
import AdminContracts from "../AdminArea/AdminContracts/AdminContracts";
import AdminPublications from "../AdminArea/AdminPublications/AdminPublications";
import Profile from "../Profile/Profile";
import Publications from "../Publications/Publications";
import Contracts from "../Contracts/Contracts";
import CreatePublications from "../CreatePublications/CreatePublications";
import MyPublications from "../Publications/MyPublications/MyPublications";
import UpdateProfile from "../Profile/UpdateProfile/UpdateProfile";

const Body = () => {
  return (
    <div className="classbody">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userarea" element={<UserArea />} />
        <Route path="/adminarea" element={<AdminArea />} />
        <Route path="/adminusers" element={<AdminUsers />} />
        <Route path="/admincontracts" element={<AdminContracts />} />
        <Route path="/adminpublications" element={<AdminPublications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="/createpublications" element={<CreatePublications />} />
        <Route path="/mypublications" element={<MyPublications />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
      </Routes>
    </div>
  );
};

export default Body;
