"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from '../pages/Login';
import Register from '../pages/Register';
import Add_playlist from '../pages/Add_playlist';
import User_managment from '../pages/User_managment';

export default function App(){
  return (
    <div className='App'>
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Add_playlist" element={<Add_playlist />} />
            <Route path="/User_managment" element={<User_managment />} />
        </Routes>
    </Router>
    </div>
  );
} 