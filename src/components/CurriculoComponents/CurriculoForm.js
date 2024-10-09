import { useContext, useState } from 'react';
import InformacoesPrincipais from './InformacoesPrincipais.js';
import InformacoesPessoais from './InformacoesPessoais.js';
import Notificacoes from './Notificacoes.js';
import InformacoesAcademicas from './InformacoesAcademicas.js';
import ExperienciaProfissional from './ExperienciaProfissional.js';
import InformacoesDeCursos from './Cursos.js'; 
import { UserContext } from '../../context/UserContext.js';

function CurriculoForm() {

  const {
    principais,
    pessoais,
    academicas,
    setAcademicas,
    profissionais,
    setProfissionais,
    cursos,
    setCursos,
  } = useContext(UserContext);

  const adicionarInformacaoAcademica = () => {
    setAcademicas([...academicas, {faculdade:'', curso:'', dataInicio:'', dataFim:'', status:'', tipoCurso:'', tipo:'', atividades:''}]);
  };

  const adicionarExperienciaProfissional = () => {
    setProfissionais([...profissionais, {empresa:'', cargo:'', dataInicioExp:'', dataFimExp:'', tipoEmprego:'', responsabilidades:''}]);
  };

  const adicionarCurso = () => {
    setCursos([...cursos, {curso:'', instituicao:'', duracao:'', descricao:''}]); // Função para adicionar curso
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cria uma instância de FormData
    const formData = new FormData();

    // Adiciona campos de texto ao formData
    formData.append('nome', pessoais.nome);
    formData.append('email', pessoais.email);
    
    // Adiciona o arquivo de currículo (caso exista)
    if (pessoais.curriculo) {
      formData.append('curriculo', pessoais.curriculo);
    }

    // Adiciona outras informações ao formData
    formData.append('principais', JSON.stringify(principais));
    formData.append('academicas', JSON.stringify(academicas));
    formData.append('profissionais', JSON.stringify(profissionais));
    formData.append('cursos', JSON.stringify(cursos));
    
    // Dados completos do currículo disponíveis aqui para submissão
    const dadosCompletos = {
      principais,
      pessoais,
      academicas,
      profissionais,
      cursos,
    };
    console.log(dadosCompletos);  // Pode ser enviado para uma API ou armazenado
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-3xl w-full p-8 rounded-lg shadow-lg">
        <div className="space-y-12">
          <InformacoesPrincipais />

          <InformacoesPessoais />

          {academicas.map((_, index) => (
            <InformacoesAcademicas
              key={index}
              index={index}
            />
          ))}
          <button
            type="button"
            onClick={adicionarInformacaoAcademica}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar Informações Acadêmicas
          </button>

          {profissionais.map((_, index) => (
            <ExperienciaProfissional
              key={index}
              index={index}
            />
          ))}
          <button
            type="button"
            onClick={adicionarExperienciaProfissional}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar Experiência Profissional
          </button>

          {cursos.map((_, index) => (
            <InformacoesDeCursos
              key={index}
              index={index}
            />
          ))}
          <button
            type="button"
            onClick={adicionarCurso}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar Curso
          </button>

          <Notificacoes />
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
      </form>
    </div>
  );
}

export default CurriculoForm;
