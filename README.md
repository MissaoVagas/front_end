# Projeto MaisPraTi e Codifica: Projeto Final - JobsRocket
A JobsRocket é um projeto desenvolvido como parte do curso de Desenvolvimento Full Stack Jr., oferecido pela parceria entre [+praTI](https://www.maisprati.com.br/) e [Codifica](https://www.codificaedu.com.br/).   
Nesse projeto foi desenvolvido o Front-End em React e o Back-end em Java.

## :paperclips: Requisitos do Projeto

Desenvolver uma aplicação web interativa e responsiva, utilizando React, que incorpore funcionalidades avançadas de autenticação, gerenciamento de perfis, navegação e interações complexas com o usuário.

## :paperclips: Requisitos Funcionais
Autenticação de Usuário:
- Implementar autenticação utilizando OAuth2 com suporte a Google e Facebook.
- Incluir um sistema de recuperação de senha com funcionalidade de envio de e-mail.

Gerenciamento de Perfis com Preferências:
- Permitir que usuários adicionem preferências pessoais, como escolha de tema (escuro/claro) e configurações de notificações.

Navegação:
- Implementar animações de transição entre páginas para uma experiência fluida.
- Utilizar breadcrumbs para facilitar a navegação em páginas com múltiplos níveis.

Lista de Itens com Paginação e Carregamento Infinito:
- Paginação eficiente e implementação de carregamento contínuo à medida que o usuário rola a página.

Detalhes do Item com Comentários e Avaliações:
- Facilitar a interação do usuário com funcionalidades para comentar e avaliar itens, além de exibir médias de avaliações.
- Interatividade com Drag and Drop: adicionar funcionalidade de arrastar e soltar para reorganização de itens em listas.

Pesquisa:
- Desenvolver um sistema de busca com filtros avançados, como faixa de preço e categorias múltiplas, com sugestões de busca baseadas no histórico do usuário.
  
## :paperclips: Requisitos Não Funcionais
Performance e Otimização:
- A aplicação deve carregar rapidamente e responder de forma ágil às interações do usuário.
- Utilização de técnicas de lazy loading e otimização de performance do React.
- Implementar caching com localStorage ou sessionStorage.
- Utilizar React.memo e useCallback para minimizar re-renderizações desnecessárias.

Segurança:
- Proteger contra SQL Injection e implementar autenticação de dois fatores.
- Implementar proteção contra ataques comuns, como XSS (Cross-Site Scripting) e CSRF (Cross-Site Request Forgery).

Usabilidade e Acessibilidade:
- Implementar feedback visual em tempo real para interações do usuário e garantir acessibilidade completa, incluindo suporte a leitores de tela e navegação por teclado.
- Interface de Usuário Responsiva: a aplicação deve ser responsiva e funcionar bem em diferentes tamanhos de tela.

Escalabilidade e Manutenibilidade:
- Adotar uma arquitetura de micro frontends com code splitting e lazy loading.
- Estabelecer uma pipeline de CI/CD usando ferramentas como GitHub Actions ou Jenkins.
- Estrutura de código modular e reutilizável para facilitar a adição de novas funcionalidades no futuro.
- Código bem documentado e estruturado, com comentários claros e concisos.
- Uso de boas práticas de desenvolvimento, como DRY (Don't Repeat Yourself), SOLID e KISS (Keep It Simple, Stupid).

## :pushpin: Projeto JobsRocket

É uma aplicação para busca e cadastro de vagas de emprego para pessoas iniciantes no mercado de trabalho. Com vagas focadas apenas em Jovem Aprendiz, Estagiário, Junior e Trainee. Nessa plataforma é possivel se cadastrar como candidato e recrutador.
Como candidato é possível criar um currículo, buscar e se candidatar a vagas. Como recrutador é possível cadastrar vagas e vizualizar o perfil dos candidatos cadastrados.

### :pushpin: Funcionalidades
- Pagina inicial (landing page)
- Cadastro (Candidato/Recrutador)
- Login (Candidato/Recrutador)
- Cadastrar Currículo
- Cadastrar Vaga
- Formulário para contato

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- Node.js
- npm (Node Package Manager)

## Como Baixar e Rodar o Projeto

1. Clone o repositório:

   ```
   git clone https://github.com/MissaoVagas/front_end.git
   cd front_end
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Inicie a aplicação
   ```
   npm start
   ```

5. Explorando a aplicação:

   - Acesse a aplicação no seu navegador através do endereço fornecido pelo servidor local (`http://localhost:3000`, por exemplo).
   - A aplicação tabm pode ser acessada por esse link do seu deploy [JobsRocket](https://jobsrocket.uc.r.appspot.com/).
