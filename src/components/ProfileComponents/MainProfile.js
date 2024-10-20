import React from 'react';
import Campo from './Campo.js';
import CampoTexto from './CampoTexto';
import defaultPhoto from '../../assets/imgs/astronauta.png';


function MainProfile() {
    return (
        <div className="relative min-h-screen flex justify-center items-center">

            {/* Conteúdo principal */}
            <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl relative z-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold mb-4 text-white">Perfil</h1>
                    <img
                        src={defaultPhoto}
                        alt="Foto de perfil"
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <blockquote className="italic text-center text-gray-400 mb-8">
                        Eu sou uma astronauta em ascensão. Espero ganhar uma oportunidade de ser
                        lançada no mercado de trabalho e ser reconhecida pela minha dedicação e
                        serviço!
                    </blockquote>
                </div>

                {/* Informações Pessoais */}
                <div className="w-full flex flex-col space-y-4">
                    <h4 className="text-xl font-semibold text-white mb-4">Informações Pessoais</h4>
                    <Campo nomeCampo="Username" valorCampo="lunaSpace" />
                    <Campo nomeCampo="Nome Completo" valorCampo="Luna Spacewalker" />
                    <Campo nomeCampo="Email" valorCampo="luna@spacewalker.com" />
                    <Campo nomeCampo="Data de Nascimento" valorCampo="27/05/2035" />
                    <Campo nomeCampo="Endereço" valorCampo="Moon base, Space" />
                    <Campo nomeCampo="Nacionalidade" valorCampo="Interestelar" />
                    <Campo nomeCampo="Estado" valorCampo="Moon C1" />
                    <Campo nomeCampo="Cidade" valorCampo="Cratera C-3" />
                    <Campo nomeCampo="Cep" valorCampo="21000-000" />
                    <Campo nomeCampo="Linkedin" valorCampo="https://linkedin.com/in/spacewalker" />
                    <Campo nomeCampo="Github" valorCampo="https://github.com/lunaSpace" />
                </div>

                {/* Informações Acadêmicas */}
                <div className="w-full flex flex-col space-y-4 mt-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Informações Acadêmicas</h4>
                    <Campo nomeCampo="Faculdade" valorCampo="Universidade Lunar Neil Armstrong" />
                    <Campo nomeCampo="Curso" valorCampo="Engenharia de Foguetes" />
                    <Campo nomeCampo="Data de Início" valorCampo="02/03/2053" />
                    <Campo nomeCampo="Data de Termino" valorCampo="02/12/2058" />
                    <Campo nomeCampo="Status" valorCampo="Comcluído" />
                    <Campo nomeCampo="Nível" valorCampo="Graduação" />
                    <Campo nomeCampo="Tipo" valorCampo="Bacharelado" />
                    <CampoTexto nomeCampo="Atividades Extracurriculares" valorCampo="Monitora de física Quantica. Iniciação científica em Dinâmica de lançamento" />
                </div>

                {/* Informações Profissionais */}
                <div className="w-full flex flex-col space-y-4 mt-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Informações Profissionais</h4>
                    <Campo nomeCampo="Empresa" valorCampo="Agencia Nacional de Espaço Interestelar" />
                    <Campo nomeCampo="cargo" valorCampo="Engenharia de Foguetes" />
                    <Campo nomeCampo="Data de Início" valorCampo="02/03/2057" />
                    <Campo nomeCampo="Data de Termino" valorCampo="02/12/2058" />
                    <Campo nomeCampo="Tipo" valorCampo="Estágio" />
                    <CampoTexto nomeCampo="Responsabilidades" valorCampo="Monitorar o espaço Interestelar" />
                </div>

                {/* Cursos */}
                <div className="w-full flex flex-col space-y-4 mt-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Cursos</h4>
                    <Campo nomeCampo="Curso" valorCampo="Termodinâmica em Foguetes" />
                    <Campo nomeCampo="Instituição" valorCampo="Academia Lunar" />
                    <Campo nomeCampo="Duração" valorCampo="02/2054-12/2054" />
                    <CampoTexto nomeCampo="Descrição" valorCampo="Termodinâmica em lançamento de foguetes" />
                </div>
            </div>
        </div>
    );
}

export default MainProfile;

