import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";


function InformacoesAcademicas({ index }) {

    const { academicas, setAcademicas, errors, setErrors } = useContext(UserContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Atualiza o objeto correto no array com base no índice
        const updatedAcademicas = academicas.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );
        setAcademicas(updatedAcademicas);

        // Atualiza os erros
        const updatedErrors = errors.academicas.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    [name]: validateField(name, value, updatedAcademicas, index),
                };
            }
            return item;
        });
        setErrors({ ...errors, academicas: updatedErrors });
    };

    const validateField = (name, value, academicas, index) => {
        // Validação de campos com mais de 5 caracteres
        if ((name === 'faculdade' || name === 'curso') && value.trim().length < 5) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} deve ter no mínimo 5 caracteres`;
        }
    
        // Validação das datas
        if (name === 'dataFim') {
            const dataInicio = new Date(academicas[index].dataInicio);
            const dataFim = new Date(value);
    
            if (dataFim < dataInicio) {
                return 'A data de fim não pode ser anterior à data de início';
            }
        }
    
        // Campo não pode estar vazio
        if (!value.trim()) {
            return 'Campo obrigatório';
        }
    
        return '';
    };
    

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white-900">Informações Acadêmicas</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
                Adicione aqui suas formações acadêmicas e atividades extra-curriculares.
            </p>

            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-400">Formação Acadêmica</legend>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`faculdade-${index}`} className="block text-sm font-medium text-white-900">Faculdade</label>
                                <input
                                    type="text"
                                    id={`faculdade-${index}`}
                                    name="faculdade"
                                    value={academicas[index].faculdade}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.faculdade ? 'border-red-500' : ''}"
                                    placeholder="Nome da faculdade"
                                />
                                {errors.academicas[index]?.faculdade && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].faculdade}</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <label htmlFor={`curso-${index}`} className="block text-sm font-medium text-white-900">Curso</label>
                                <input
                                    type="text"
                                    id={`curso-${index}`}
                                    name='curso'
                                    value={academicas[index].curso}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.curso ? 'border-red-500' : ''}"
                                    placeholder="Nome do curso"
                                />
                                {errors.academicas[index]?.curso && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].curso}</span>
                                )}
                            </div>
                        </div>

                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`dataInicio-${index}`} className="block text-sm font-medium text-white-900">Data de Início</label>
                                <input
                                    type="date"
                                    id={`dataInicio-${index}`}
                                    name='dataInicio'
                                    value={academicas[index].dataInicio}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.dataInicio ? 'border-red-500' : ''}"
                                />
                                {errors.academicas[index]?.dataInicio && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].dataInicio}</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <label htmlFor={`dataFim-${index}`} className="block text-sm font-medium text-white-900">Data de Término</label>
                                <input
                                    type="date"
                                    id={`dataFim-${index}`}
                                    name='dataFim'
                                    value={academicas[index].dataFim}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.dataFim ? 'border-red-500' : ''}"
                                />
                                {errors.academicas[index]?.dataFim && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].dataFim}</span>
                                )}
                            </div>
                        </div>

                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`status-${index}`} className="block text-sm font-medium text-white-900">Status</label>
                                <select
                                    id={`status-${index}`}
                                    value={academicas[index].status}
                                    name='status'
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.status ? 'border-red-500' : ''}"
                                >
                                    <option>Em andamento</option>
                                    <option>Concluído</option>
                                    <option>Trancado</option>
                                </select>
                                {errors.academicas[index]?.status && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].status}</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <label htmlFor={`tipoCurso-${index}`} className="block text-sm font-medium text-white-900">Tipo de Curso</label>
                                <select
                                    id={`tipoCurso-${index}`}
                                    value={academicas[index].tipoCurso}
                                    name='tipoCurso'
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.tipoCurso ? 'border-red-500' : ''}"
                                >
                                    <option>Graduação</option>
                                    <option>Pós-graduação</option>
                                    <option>Mestrado</option>
                                    <option>Doutorado</option>
                                </select>
                                {errors.academicas[index]?.tipoCurso && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].tipoCurso}</span>
                                )}
                            </div>
                        </div>

                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`tipo-${index}`} className="block text-sm font-medium text-white-900">Tipo</label>
                                <select
                                    id={`tipo-${index}`}
                                    value={academicas[index].tipo}
                                    name='tipo'
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.tipo ? 'border-red-500' : ''}"
                                >
                                    <option>Bacharelado</option>
                                    <option>Tecnólogo</option>
                                    <option>Licenciatura</option>
                                </select>
                                {errors.academicas[index]?.tipo && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].tipo}</span>
                                )}
                            </div>
                        </div>

                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`atividades-${index}`} className="block text-sm font-medium text-white-900">Atividades Extra-Curriculares</label>
                                <textarea
                                    id={`atividades-${index}`}
                                    value={academicas[index].atividades}
                                    name='atividades'
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="mt-1 block w-full rounded-md bg-stone-800 border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.academicas[index]?.atividades ? 'border-red-500' : ''}"
                                    placeholder="Descreva as atividades que participou durante o curso"
                                ></textarea>
                                {errors.academicas[index]?.atividades && (
                                    <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>

    )
}

export default InformacoesAcademicas