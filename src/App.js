// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import Curriculo from './pages/Curriculo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/curriculo" element={<Curriculo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
