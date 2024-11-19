import React, { useState } from "react"
import CampoVaga from "./CampoVaga";
import CampoOption from "./CampoOption";
import CampoArea from "./CampoArea";
import CampoLinkedin from './CampoLinkedin'


function CadastrarVagaComponent() {

    const [vaga, setVaga] = useState({
        funcao: '',
        dataIncricao: '',
        empresa: '',
        linkedinEmpresa: '',
        recrutador: '',
        linkedinRecrutador: '',
        local: '',
        tipo: '',
        modalidade: '',
        contrato: '',
        temporalidade: '',
        pcd: '',
        descricaoEmpresa: '',
        responsabilidades: '',
        desejaveis: '',
        requisitos: '',
        salario: '',
        beneficios: '',
        etapas: '',
        observacoes: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setVaga((prevVaga) => ({
            ...prevVaga,
            [name]: value,
        }));

        //validateField(name, value)
    }



    return (
        <div className=" min-h-screen flex  flex-col justify-center items-center">
            <h1 className="text-base font-semibold leading-7 text-white-900">Cadastrar Vaga</h1>
            <form className="max-w-3xl w-full p-8 rounded-lg shadow-lg">
                <div className="space-y-12">
                    <div className="relative flex flex-col gap-x-3 gap-y-3">
                        <CampoVaga
                            tipo="text"
                            label="Nome da Função"
                            parametro="funcao"
                            valor={vaga.funcao}
                            funcaoChange={handleChange}
                            placeholder="Ex: Estagiário de Administração"
                        >
                            {/* {errors.profissionais[index]?.empresa && (
                                <span className="text-red-500 text-sm">{errors.profissionais[index].empresa}</span>
                            )} */}
                        </CampoVaga>
                        <CampoVaga
                            tipo="date"
                            label="Inscrições até:"
                            parametro="dataInscricao"
                            valor={vaga.dataIncricao}
                            funcaoChange={handleChange}
                            placeholder="01-01-2025"
                        >
                            {/* {errors.profissionais[index]?.empresa && (
                                <span className="text-red-500 text-sm">{errors.profissionais[index].empresa}</span>
                            )} */}
                        </CampoVaga>
                        <CampoVaga
                            tipo="text"
                            label="Empresa"
                            parametro="empresa"
                            valor={vaga.empresa}
                            funcaoChange={handleChange}
                            placeholder="Empresa C&O"
                        >
                            {/* {errors.profissionais[index]?.empresa && (
                                <span className="text-red-500 text-sm">{errors.profissionais[index].empresa}</span>
                            )} */}
                        </CampoVaga>
                        <CampoLinkedin
                            parametro="linkedinEmpresa"
                            valor={vaga.linkedinEmpresa}
                            funcaoChange={handleChange}
                        >
                            {/* {errors.linkedin && (
                                <p className="text-red-500 text-sm">{errors.linkedin}</p>
                            )} */}
                        </CampoLinkedin>

                        <CampoVaga
                            tipo="text"
                            label="Nome do Recrutador"
                            parametro="recrutador"
                            valor={vaga.recrutador}
                            funcaoChange={handleChange}
                            placeholder="Aurora Spaceship"
                        >
                            {/* {errors.profissionais[index]?.empresa && (
                                <span className="text-red-500 text-sm">{errors.profissionais[index].empresa}</span>
                            )} */}
                        </CampoVaga>
                        <CampoLinkedin
                            parametro="linkedinRecrutador"
                            valor={vaga.linkedinRecrutador}
                            funcaoChange={handleChange}
                        >
                            {/* {errors.linkedin && (
                                <p className="text-red-500 text-sm">{errors.linkedin}</p>
                            )} */}
                        </CampoLinkedin>
                        <CampoVaga
                            tipo="text"
                            label="Local da Empresa"
                            parametro="local"
                            valor={vaga.local}
                            funcaoChange={handleChange}
                            placeholder="Rio de Janeiro, RJ"
                        >
                            {/* {errors.profissionais[index]?.empresa && (
                                <span className="text-red-500 text-sm">{errors.profissionais[index].empresa}</span>
                            )} */}
                        </CampoVaga>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                            <CampoOption
                                parametro="tipo"
                                label="Tipo da Vaga"
                                valor={vaga.tipo}
                                funcaoChange={handleChange}
                                listaOption={['Estagiário', 'Jovem Aprendiz', 'Trainee', 'Junior']}
                            >
                                {/* {errors.academicas[index]?.tipoCurso && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].tipoCurso}</span>
                            )} */}
                            </CampoOption>
                            <CampoOption
                                parametro="modalidade"
                                label="Modalidade da Vaga"
                                valor={vaga.modalidade}
                                funcaoChange={handleChange}
                                listaOption={['Presencial', 'Híbrido', 'Remoto']}
                            >
                                {/* {errors.academicas[index]?.tipoCurso && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].tipoCurso}</span>
                            )} */}
                            </CampoOption>
                            <CampoOption
                                parametro="contrato"
                                label="Tipo de Contrato"
                                valor={vaga.contrato}
                                funcaoChange={handleChange}
                                listaOption={['CLT', 'PJ']}
                            >
                                {/* {errors.academicas[index]?.tipoCurso && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].tipoCurso}</span>
                            )} */}
                            </CampoOption>
                            <CampoOption
                                parametro="temporalidade"
                                label="Vaga"
                                valor={vaga.temporalidade}
                                funcaoChange={handleChange}
                                listaOption={['Efetivo', 'Temporário']}
                            >
                                {/* {errors.academicas[index]?.tipoCurso && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].tipoCurso}</span>
                            )} */}
                            </CampoOption>
                            <CampoOption
                                parametro="pcd"
                                label="Sobre a vaga:"
                                valor={vaga.pcd}
                                funcaoChange={handleChange}
                                listaOption={['Vaga Afirmativa', 'Elegível para PCD', 'Somente PCD']}
                            >
                                {/* {errors.academicas[index]?.tipoCurso && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].tipoCurso}</span>
                            )} */}
                            </CampoOption>
                        </div>

                        <CampoArea
                            label="Descrição da Empresa"
                            parametro="descricaoEmpresa"
                            valor={vaga.descricaoEmpresa}
                            funcaoChange={handleChange}
                            placeholder="Faça uma descrição da empresa e de sua cultura"

                        >
                            {/* {errors.academicas[index]?.atividades && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                            )} */}
                        </CampoArea>
                        <CampoArea
                            label="Responsabilidade da Vaga"
                            parametro="responsabilidades"
                            valor={vaga.responsabilidades}
                            funcaoChange={handleChange}
                            placeholder="Faça uma descrição das responsabilidades da vaga "

                        >
                            {/* {errors.academicas[index]?.atividades && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                            )} */}
                        </CampoArea>
                        <CampoArea
                            label="Requisitos da Vaga"
                            parametro="requisitos"
                            valor={vaga.requisitos}
                            funcaoChange={handleChange}
                            placeholder="Faça uma descrição dos requisitos da vaga "

                        >
                            {/* {errors.academicas[index]?.atividades && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                            )} */}
                        </CampoArea>
                        <CampoArea
                            label="Desejáveis"
                            parametro="desejaveis"
                            valor={vaga.desejaveis}
                            funcaoChange={handleChange}
                            placeholder="Faça uma descrição das habilidades desejáveis"

                        >
                            {/* {errors.academicas[index]?.atividades && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                            )} */}
                        </CampoArea>
                        <CampoVaga
                            tipo="text"
                            label="Salário"
                            parametro="salario"
                            valor={vaga.salario}
                            funcaoChange={handleChange}
                            placeholder="R$2.500,00"
                        >
                            {/* {errors.profissionais[index]?.empresa && (
                                <span className="text-red-500 text-sm">{errors.profissionais[index].empresa}</span>
                            )} */}
                        </CampoVaga>
                        <CampoArea
                            label="Benefícios da Vaga"
                            parametro="beneficios"
                            valor={vaga.beneficios}
                            funcaoChange={handleChange}
                            placeholder="Faça uma descrição dos benefícios da vaga "

                        >
                            {/* {errors.academicas[index]?.atividades && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                            )} */}
                        </CampoArea>
                        <CampoArea
                            label="Etapas do Processo"
                            parametro="etapas"
                            valor={vaga.etapas}
                            funcaoChange={handleChange}
                            placeholder="Faça uma enumeração das etapas do processo seletivo "

                        >
                            {/* {errors.academicas[index]?.atividades && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                            )} */}
                        </CampoArea>
                        <CampoArea
                            label="Observações"
                            parametro="observacoes"
                            valor={vaga.observacoes}
                            funcaoChange={handleChange}
                            placeholder="Deseja adicionar mais alguma informação? Use esse espaço! "

                        >
                            {/* {errors.academicas[index]?.atividades && (
                                <span className="text-red-500 text-sm">{errors.academicas[index].atividades}</span>
                            )} */}
                        </CampoArea>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-white-900">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Salvar
                        </button>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default CadastrarVagaComponent