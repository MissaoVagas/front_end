// src/context/UserContext.js
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import defaultPhoto from "../assets/imgs/astronauta.png";

// Criação do Contexto
export const UserContext = createContext();

// Componente Provider para envolver a aplicação
export const UserProvider = ({ children }) => {
  // Estados para armazenar as informações
  const [usuario, setUsuario] = useState({
    nome:"",
    email:"",
    senha:"",
    role:""
  })
  const [userInfo, setUserInfo] = useState({})
  const [principais, setPrincipais] = useState({
    username: "",
    about: "",
    photo: { defaultPhoto },
  });
  const [pessoais, setPessoais] = useState({});
  const [academicas, setAcademicas] = useState([
    {
      faculdade: "",
      curso: "",
      dataInicio: "",
      dataFim: "",
      status: "",
      tipoCurso: "",
      tipo: "",
      atividades: "",
    },
  ]);
  const [profissionais, setProfissionais] = useState([
    {
      empresa: "",
      cargo: "",
      dataInicioExp: "",
      dataFimExp: "",
      tipoEmprego: "",
      responsabilidades: "",
    },
  ]);
  const [cursos, setCursos] = useState([
    { curso: "", instituicao: "", duracao: "", descricao: "" },
  ]);
  const [errors, setErrors] = useState({
    username: "",
    sobre: "",
    nome: "",
    sobrenome: "",
    cep: "",
    email: "",
    linkedin: "",
    academicas: [{ faculdade: "", curso: "", dataInicio: "", dataFim: "" }],
    profissionais: [
      {
        empresa: "",
        cargo: "",
        dataInicioExp: "",
        dataFimExp: "",
        tipoEmprego: "",
        responsabilidades: "",
      },
    ],
    cursos: [{ curso: "", instituicao: "", duracao: "", descricao: "" }],
  });

  return (
    <UserContext.Provider
      value={{
        usuario,
        setUsuario,
        userInfo,
        setUserInfo,
        principais,
        setPrincipais,
        pessoais,
        setPessoais,
        academicas,
        setAcademicas,
        profissionais,
        setProfissionais,
        cursos,
        setCursos,
        errors,
        setErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
