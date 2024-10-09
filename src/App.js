// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import Curriculo from './pages/Curriculo';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/curriculo" element={<Curriculo/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
