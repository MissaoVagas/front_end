// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Curriculo from './pages/Curriculo';
import { UserProvider } from './context/UserContext';
import './App.css';
import Profile from './pages/Profile';
import Contato from './pages/Contato';

import CadastrarVaga from './pages/CadastrarVaga';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/curriculo" element={<Curriculo/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/cadastrar-vaga" element={<CadastrarVaga/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
