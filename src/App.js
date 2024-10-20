// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login';
import Curriculo from './pages/Curriculo';
import { UserProvider } from './context/UserContext';
import FiltroPesquisa from './components/FiltroPesquisa';
import ResultadosPesquisa from './components/ResultadosPesquisa';

import './App.css';

function App() {

  const [resultados, setResultados] = useState([]); 

  const handleFilterChange = (filtros) => {
    
    console.log('Filtros aplicados:', filtros);}
   


  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/curriculo" element={<Curriculo/>}/>
          <Route path="/resultados-pesquisa" element={<ResultadosPesquisa/>}/>
          <Route path="/filtro-pesquisa" element={<FiltroPesquisa/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
