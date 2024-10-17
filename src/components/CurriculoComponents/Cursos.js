import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";


function Cursos({ index }) {

    const { cursos, setCursos, errors, setErrors } = useContext(UserContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Atualiza o objeto correto no array com base no índice
        const updatedCursos = cursos.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );
        setCursos(updatedCursos);

        // Atualiza os erros
        const updatedErrors = errors.cursos.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    [name]: validateField(name, value, updatedCursos, index),
                };
            }
            return item;
        });
        setErrors({ ...errors, cursos: updatedErrors });
    }

    const validateField = (name, value, cursos, index) => {
        // Validação de campos com mais de 5 caracteres
        if ((name === 'curso' || name === 'instituicao') && value.trim().length < 5) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} deve ter no mínimo 5 caracteres`;
        }


        // Campo não pode estar vazio
        if (!value.trim()) {
            return 'Campo obrigatório';
        }
    }


    return (
        <div className="border-b border-gray-900/10 pb-4">
            <h2 className="text-base font-semibold leading-7 text-white-900">Curso</h2>
            <div className="mt-4">
                <label htmlFor={`curso-${index}`} className="block text-sm font-medium leading-6 text-white-900">
                    Nome do Curso
                </label>
                <input
                    id={`curso-${index}`}
                    name="curso"
                    type="text"
                    value={cursos[index].curso}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.cursos[index]?.curso ? 'border-red-500' : ''}"
                />
                {errors.cursos[index]?.curso && (
                    <span className="text-red-500 text-sm">{errors.cursos[index].curso}</span>
                )}
            </div>

            <div className="mt-4">
                <label htmlFor={`instituicao-${index}`} className="block text-sm font-medium leading-6 text-white-900">
                    Instituição
                </label>
                <input
                    id={`instituicao-${index}`}
                    name="instituicao"
                    type="text"
                    value={cursos[index].instituicao}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.cursos[index]?.instituicao ? 'border-red-500' : ''}"
                />
                {errors.cursos[index]?.instituicao && (
                    <span className="text-red-500 text-sm">{errors.cursos[index].instituicao}</span>
                )}
            </div>

            <div className="mt-4">
                <label htmlFor={`duracao-${index}`} className="block text-sm font-medium leading-6 text-white-900">
                    Duração (Início e Fim)
                </label>
                <input
                    id={`duracao-${index}`}
                    name="duracao"
                    type="text"
                    value={cursos[index].duracao}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.cursos[index]?.duracao ? 'border-red-500' : ''}"
                />
                {errors.cursos[index]?.duracao && (
                    <span className="text-red-500 text-sm">{errors.cursos[index].duracao}</span>
                )}
            </div>

            <div className="mt-4">
                <div className="flex-1">
                    <label htmlFor={`descricao-${index}`} className="block text-sm font-medium text-white-900">Descrição do curso</label>
                    <textarea
                        id={`descricao-${index}`}
                        rows="3"
                        name='descricao'
                        value={cursos[index].descricao}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.cursos[index]?.descricao ? 'border-red-500' : ''}"
                        placeholder="Descreva a ementa do curso e seu aprendizado"
                    ></textarea>
                    {errors.cursos[index]?.descricao && (
                    <span className="text-red-500 text-sm">{errors.cursos[index].descricao}</span>
                )}
                </div>
            </div>
        </div>
    )
}

export default Cursos