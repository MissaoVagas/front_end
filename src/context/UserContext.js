import { createContext, useState } from 'react';
import defaultPhoto from '../assets/imgs/astronauta.png'

// Criação do Contexto
export const UserContext = createContext();

// Componente Provider para envolver a aplicação
export const UserProvider = ({ children }) => {
  // Estados para armazenar as informações
  const [principais, setPrincipais] = useState({username: '', about: '', photo:{defaultPhoto}});
  const [pessoais, setPessoais] = useState({});
  const [academicas, setAcademicas] = useState([
    {faculdade:'', curso:'', dataInicio:'', dataFim:'', status:'', tipoCurso:'', tipo:'', atividades:''}
  ]);
  const [profissionais, setProfissionais] = useState([
    {empresa:'', cargo:'', dataInicioExp:'', dataFimExp:'', tipoEmprego:'', responsabilidades:''}
  ]);
  const [cursos, setCursos] = useState([
    {curso:'', instituicao:'', duracao:'', descricao:''}
  ]);
  const [errors, setErrors] = useState({
    username:'',
    sobre:'',
    nome:'',
    sobrenome:'',
    cep:'',
    email:'',
    linkedin:'',
    academicas: [{ faculdade: '', curso: '', dataInicio: '', dataFim: '' }],
    profissionais:[{empresa:'', cargo:'', dataInicioExp:'', dataFimExp:'', tipoEmprego:'', responsabilidades:''}],
    cursos: [{curso:'', instituicao:'', duracao:'', descricao:''}]
  });

  const [resultados, setResultados] = useState([]);
  const [filtros, setFiltros] = useState({
    categoria: '',
    localizacao: '',
    nivelExperiencia: '',
    tipoContrato: ''
  });
  

  return (
    <UserContext.Provider
      value={{
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
        resultados,        
        setResultados,     
        filtros,           
        setFiltros         
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
