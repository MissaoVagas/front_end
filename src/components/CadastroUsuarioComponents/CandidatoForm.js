import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function CandidatoForm() {

    const { usuario, setUsuario } = useContext(UserContext);

    const handleChange = (e)=>{
        const {name, value} = e.target;

        usuario.role = "CANDIDATO"

        setUsuario((prevState)=>({
            ...prevState,
            [name]:value,
        }))
    }

    return (
        <>
            <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300">
                    Nome Completo
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={usuario.nome}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:ring-2 focus:ring-indigo-500"
                        placeholder="Digite seu nome completo"
                        required
                    />
                </label>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={usuario.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:ring-2 focus:ring-indigo-500"
                        placeholder="Digite seu email"
                        required
                    />
                </label>
            </div>

            <div className="mb-4">
                <label htmlFor="senha" className="block text-sm font-medium text-gray-300">
                    Senha
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        value={usuario.senha}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:ring-2 focus:ring-indigo-500"
                        placeholder="Crie uma senha"
                        required
                    />
                </label>
            </div>

            <div className="mb-4">
                <label htmlFor="area" className="block text-sm font-medium text-gray-300">
                    Área de Interesse
                    <input
                        type="text"
                        id="area"
                        name="campoDeInteresse"
                        value={usuario.campoDeInteresse}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:ring-2 focus:ring-indigo-500"
                        placeholder="Ex: Tecnologia, Design, Marketing"
                    />
                </label>
            </div>
        </>
    );
}

export default CandidatoForm;
