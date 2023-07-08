"use client";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from '../pages/Login';
import Register from '../pages/Register';
import Add_playlist from '../pages/Add_playlist';
import User_managment from '../pages/User_managment';

export default function App(){
  return (
    <div className='App'>
    <BrowserRouter>
        <Routes>
            Route
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Add_playlist" element={<Add_playlist />} />
            <Route path="/User_managment" element={<User_managment />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
} 