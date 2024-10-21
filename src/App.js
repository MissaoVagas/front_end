// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Curriculo from './pages/Curriculo';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/curriculo" element={<Curriculo/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
