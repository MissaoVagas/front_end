import { useContext, useState } from "react";
import CandidatoForm from "./CandidatoForm";
import RecrutadorForm from "./RecrutadorForm";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./CadastroComponent.css";
import { UserContext } from "../../context/UserContext";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function CadastroComponent() {
    const [perfil, setPerfil] = useState("candidato");

    const {usuario, userInfo, setUserInfo} = useContext(UserContext);

    const navigate = useNavigate()

    const handleSubmit = async (event)=>{
        event.preventDefault();

        try{

            let response;

            if(perfil == "candidato"){
                response = await axios.post('http://localhost:8080/api/user/candidato', usuario);
            }else{
                response = await axios.post('http://localhost:8080/api/user/recrutador', usuario);
                
            }

            if(response.status == "201"){
                setUserInfo(response.data);
                console.log(response);
                navigate('/login')
            }else{
                console.error('Erro na requisição: ', response.statusText)
            }
            
            

        }catch(error){
            console.error('Erro ao cadastrar usuário', error)
            alert("Erro ao cadastrar usuário! Por favor, tente novamente.")
        }
    }

    return (
        <div className="Cadastro">
            <div className="cadastro-rocket"></div>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Crie sua conta</h2>

                    <div className="flex justify-center mb-6">
                        <button
                            className={`perfil-button ${perfil === "candidato" ? "ativo" : ""}`}
                            onClick={() => setPerfil("candidato")}
                        >
                            Candidato
                        </button>
                        <button
                            className={`perfil-button ${perfil === "recrutador" ? "ativo" : ""}`}
                            onClick={() => setPerfil("recrutador")}
                        >
                            Recrutador
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {perfil === "candidato" ? <CandidatoForm /> : <RecrutadorForm />}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded mt-4"
                        >
                            Cadastrar
                        </button>
                    </form>

                    <div className="flex justify-between mt-6">
                        <button className="w-1/2 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded mr-2">
                            <FaGoogle className="mr-2" /> <span>Google</span>
                        </button>
                        <button className="w-1/2 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded ml-2">
                            <FaFacebook className="mr-2" /> <span>Facebook</span>
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <span className="text-gray-400">Já tem uma conta? </span>
                        <a href="#" className="text-indigo-400 hover:underline">Faça login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadastroComponent;
