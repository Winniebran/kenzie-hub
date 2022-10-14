import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Login } from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound/NotFound.jsx';
import { Cadastro } from '../Pages/Register/Register';


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Cadastro/>} />
      <Route path="/dashboard" element={ <Dashboard/> } />
      <Route path="*" element={ <NotFound/> } />
    </Routes>
  )
}