import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";


function ExperienciaProfissional({ index }) {

    const { profissionais, setProfissionais, errors, setErrors } = useContext(UserContext);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedProfissionais = profissionais.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );
        setProfissionais(updatedProfissionais);

        const updatedErrors = errors.profissionais.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    [name]: validateField(name, value, updatedProfissionais, index),
                };
            }
            return item;
        });
        setErrors({ ...errors, profissionais: updatedErrors });
    };

    const validateField = (name, value, profissionais, index) => {
        // Validação de campos com mais de 5 caracteres
        if ((name === 'empresa' || name === 'cargo' ) && value.trim().length < 5) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} deve ter no mínimo 5 caracteres`;
        }
    
        // Validação das datas
        if (name === 'dataFimExp') {
            const dataInicioExp = new Date(profissionais[index].dataInicioExp);
            const dataFimExp = new Date(value);
    
            if (dataFimExp < dataInicioExp) {
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
            <h2 className="text-base font-semibold leading-7 text-white-900">Experiência Profissional</h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
                Adicione aqui suas experiências profissionais relevantes.
            </p>

            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-400">Experiência</legend>
                    <div className="mt-6 space-y-6">
                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`empresa-${index}`} className="block text-sm font-medium text-white-900">Empresa</label>
                                <input
                                    type="text"
                                    id={`empresa-${index}`}
                                    name='empresa'
                                    value={profissionais[index].empresa}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.profissionais[index]?.faculdade ? 'border-red-500' : ''}"
                                    placeholder="Nome da empresa"
                                />
                                {errors.profissionais[index]?.empresa && (
                                    <span className="text-red-500 text-sm">{errors.profissionais[index].empresa}</span>
                                )}
                            </div>
                            <div className="flex-1">
                                <label htmlFor={`cargo-${index}`} className="block text-sm font-medium text-white-900">Cargo</label>
                                <input
                                    type="text"
                                    id={`cargo-${index}`}
                                    name='cargo'
                                    value={profissionais[index].cargo}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.profissionais[index]?.cargo ? 'border-red-500' : ''}"
                                    placeholder="Cargo ou título"
                                />
                                {errors.profissionais[index]?.cargo && (
                                    <span className="text-red-500 text-sm">{errors.profissionais[index].cargo}</span>
                                )}
                            </div>
                        </div>

                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`dataInicioExp-${index}`} className="block text-sm font-medium text-white-900">Data de Início</label>
                                <input
                                    type="date"
                                    id={`dataInicioExp-${index}`}
                                    name="dataInicioExp"
                                    value={profissionais[index].dataInicioExp}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.profissionais[index]?.dataInicioExp ? 'border-red-500' : ''}"
                                />
                                {errors.profissionais[index]?.dataInicioExp && (
                                    <span className="text-red-500 text-sm">{errors.profissionais[index].dataInicioExp}</span>
                                )}

                            </div>
                            <div className="flex-1">
                                <label htmlFor={`dataFimExp-${index}`} className="block text-sm font-medium text-white-900">Data de Término</label>
                                <input
                                    type="date"
                                    id={`dataFimExp-${index}`}
                                    name='dataFimExp'
                                    value={profissionais[index].dataFimExp}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.profissionais[index]?.dataInicioFim ? 'border-red-500' : ''}"
                                />
                                {errors.profissionais[index]?.dataFimExp && (
                                    <span className="text-red-500 text-sm">{errors.profissionais[index].dataFimExp}</span>
                                )}
                            </div>
                        </div>

                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`tipoEmprego-${index}`} className="block text-sm font-medium text-white-900">Tipo de Emprego</label>
                                <select
                                    id={`tipoEmprego-${index}`}
                                    name='tipoEmprego'
                                    value={profissionais[index].tipoEmprego}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.profissionais[index]?.tipoEmprego ? 'border-red-500' : ''}"
                                >
                                    <option>Tempo integral</option>
                                    <option>Meio período</option>
                                    <option>Estágio</option>
                                    <option>Freelancer</option>
                                </select>
                                {errors.profissionais[index]?.tipoEmprego && (
                                    <span className="text-red-500 text-sm">{errors.profissionais[index].tipoEmprego}</span>
                                )}
                            </div>
                        </div>

                        <div className="relative flex gap-x-3">
                            <div className="flex-1">
                                <label htmlFor={`responsabilidades-${index}`} className="block text-sm font-medium text-white-900">Responsabilidades e Realizações</label>
                                <textarea
                                    id={`responsabilidades-${index}`}
                                    name='responsabilidades'
                                    value={profissionais[index].responsabilidades}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="mt-1 block w-full rounded-md border-gray-300 bg-stone-800 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm ${errors.profissionais[index]?.responsabilidades ? 'border-red-500' : ''}"
                                    placeholder="Descreva suas responsabilidades e realizações nesta posição"
                                ></textarea>
                                {errors.profissionais[index]?.responsabilidades && (
                                    <span className="text-red-500 text-sm">{errors.profissionais[index].responsabilidades}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>

    )
}

export default ExperienciaProfissional