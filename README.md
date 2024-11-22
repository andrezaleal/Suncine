<p align="center">
  <img src="./docs/img/SunCine.png" width="500" alt="SunCine Logo" />
</p>
</br>

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=nodedotjs&logoColor=white&labelColor=black" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=black" />
  <img src="https://img.shields.io/badge/Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=black" />
  <img src="https://img.shields.io/badge/Fastify-%23FFFFFF?style=for-the-badge&logo=fastify&logoColor=white&labelColor=black" />
  <img src="https://img.shields.io/badge/TMDB-%23006DBF?style=for-the-badge&logo=themoviedatabase&logoColor=white&labelColor=black" />
  <img src="https://img.shields.io/badge/Docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white&labelColor=black" />
</div>

# 🎬 SunCine
O SunCine é uma plataforma de filmes projetada para fornecer informações detalhadas sobre os filmes mais populares, além de permitir que os usuários curtam seus filmes favoritos e gerenciem preferências pessoais.

## 📔 Sumário
- 🎯 Desafio (Frontend Jr.)
  - 📝 Páginas a Desenvolver
  - 👽️ Integração com o Backend
- ✅ Avaliação
  - 🗂️ Entrega do Código
  - 📝 Documentação
  - 🔍 Ferramentas e Suporte
  - 📢 Apresentação
  - 📅 Datas e Dúvidas
- 📋 Requisitos
- ⚠️ Possíveis Problemas e Soluções
- 🔗 Links Úteis
- 🚀 Iniciando o Projeto
  - 🔐 Informações do Usuário
- 🛠️ Comandos Úteis
- 🖼️ Referência
- 📄 Documentação do Candidato

## 🎯 Desafio (Frontend Jr.)
O objetivo deste desafio é desenvolver 4 páginas web a partir do material de referência fornecido no email, utilizando as seguintes tecnologias: _Node.js_, _Vite_, _React.js_, _TailwindCSS_, e quaisquer outras bibliotecas que você julgue necessárias.

### 📝 Páginas a Desenvolver
1. **Login:** Tela inicial para autenticação do usuário. Deve permitir o envio de e-mail e senha para o backend, armazenando o token JWT retornado e exibindo mensagens de erro em caso de falha.
2. **Filmes em Alta:** Página que exibe os _Top 10 filmes mais populares do dia do TMDB_, incluindo informações como imagem, título, popularidade e data de lançamento, conforme fornecido pela API.
3. **Minhas Curtidas:** Página que lista os filmes curtidos pelo usuário autenticado, mostrando título, imagem e data de lançamento. Deve permitir identificar se o filme foi marcado como favorito.
4. **Perfil:** Página com informações básicas do usuário autenticado, como nome e e-mail. Deve incluir a funcionalidade de logout para invalidar a sessão e redirecionar para o login.

> **Nota:** O material de referência contém versões para mobile e tablet, mas apenas a versão web precisa ser reproduzida.

### 👽️ Integração com o Backend

A aplicação deverá consumir a **API pré-desenvolvida** fornecida para o teste. Basta iniciar o backend utilizando os comandos descritos posteriormente e realizar as requisições seguindo a documentação da API.

#### Autenticação:
- Você deverá implementar a autenticação no frontend utilizando o token JWT retornado pelo backend.
- O único usuário cadastrado é o **Dev**, que será automaticamente criado na primeira execução do backend.
- Nas requisições que exigem autorização, inclua o token no cabeçalho **Authorization** no formato: `Authorization: Bearer <seu-token>`

#### Estrutura do Projeto
Este projeto utiliza a arquitetura **monorepo** com o gerenciador de pacotes `pnpm`. O seu código deve ser desenvolvido dentro do subprojeto: `projects/front/`

## ✅ Avaliação 
O desafio consiste em desenvolver os componentes conforme o material de referência. No entanto, entendemos que o tempo de desenvolvimento pode ser limitado. Por isso, o foco principal deve estar em:

- Criar todas as telas com suas **funcionalidades básicas**.
- Implementar corretamente o **fluxo de navegação e autenticação**.

Se não for possível reproduzir todos os detalhes do design, envie o resultado mesmo assim. A avaliação irá considerar mais do que a similaridade com o material de referência.

### 🗂️ Entrega do Código
- O código deve ser colocado em um **repositório público no GitHub**.
- O link do repositório deve ser enviado conforme descrito no e-mail recebido junto com este desafio.
- Apenas os commits realizados **até a data prevista no e-mail** serão válidos. O avaliador irá verificar o histórico de commits.

### 📝 Documentação
Caso seja necessário algum passo adicional para rodar o projeto (além do que já foi configurado), isso deve ser **descrito ao final do README** do repositório.

### 🔍 Ferramentas e Suporte

Você pode utilizar qualquer ferramenta que facilite o desenvolvimento, como _ChatGPT_, _pesquisas na internet_, ou até mesmo _consultar colegas mais experientes_. Isso não será um problema.

Porém, você será questionado sobre o código desenvolvido e deve ser capaz de explicá-lo detalhadamente. Por isso:
- Tenha cuidado com auxílios automáticos ou externos.
- Mais importante do que o resultado final é **demonstrar o entendimento** de por que algo foi feito de determinada forma.

### 📢 Apresentação
Após a entrega, uma apresentação será agendada para que você demonstre o seu trabalho. O formato será:
- **20 minutos** para apresentar o que foi desenvolvido.
- **10 a 20 minutos** de perguntas feitas pelo entrevistador. As perguntas podem abordar:
  - Seu raciocínio para resolver determinados problemas.
  - Seu fluxo de desenvolvimento.

> **Nota:** Caso você prefira, pode montar uma apresentação para facilitar sua explicação. Isso não é obrigatório, mas pode ajudar a organizar e esclarecer melhor as suas ideias.

### 📅 Datas e Dúvidas
As datas para entrega e apresentação estão descritas no e-mail que você recebeu junto com este desafio. Caso tenha dúvidas, entre em contato pelo e-mail informado.

## 📋 Requisitos
Para executar este projeto, é necessário ter as seguintes ferramentas instaladas e configuradas no ambiente de desenvolvimento:
- [Node.js (v20.x.x)](https://nodejs.org/): A base para rodar o backend do projeto.
- [pnpm](https://pnpm.io/): Gerenciador de pacotes utilizado no monorepo para instalação e gerenciamento das dependências.
- [Docker](https://www.docker.com/): Ferramenta para criar e gerenciar containers.
- [Docker Compose](https://docs.docker.com/compose/): Utilizado para gerenciar os containers do banco de dados (MongoDB) e da ferramenta de gerenciamento de banco de dados (Mongo Express).
- [Biome](https://biomejs.dev/): Code formatter utilizado para padronizar o estilo do código. Você pode configura o biome na sua IDE utilizando suas [extensões](https://biomejs.dev/guides/editors/first-party-extensions/).
- [TMDB Api Token](https://developer.themoviedb.org/reference/intro/authentication): Cadastre-se no TMDB e gere um token para autenticação na API. Esse token será necessário para que a aplicação funcione corretamente.

### ⚠️ Possíveis Problemas e Soluções
**1. Gerenciador de Pacotes**
  - **Problema**: Outro gerenciador de pacotes foi utilizado no lugar do `pnpm`.
  - **Solução**:
    1. Apague os diretórios _node_modules/_, _projects/back/node_modules/_, _projects/front/node_modules/_, e o arquivo lock do gerenciador utilizado anteriormente.
    2. Execute o comando: `pnpm i`

**2. Banco de dados não conectando**
  - **Problema**: Backend acusando que não encontra o banco de dados.
  - **Solução**:
    1. Verifique se o **Docker** e o **Docker Compose** estão instalados e funcionando corretamente.
    2. Inicie os containers do banco de dados com o comando: `pnpm run db:start`

**3. Backend Retornando Erro 500**
  - **Problema**: O backend retorna erro 500 devido à falta do `TMDB_TOKEN`
  - **Solução**: 
    1. Certifique-se de que o token TMDB foi gerado e configurado corretamente.
    2. Verifique se o arquivo `projects/back/.env` contém o valor correto para a variável `TMDB_TOKEN`.

**4. Erro ao Comitar ou Enviar Código para o GitHub**
  - **Problema**: O programa não permite criar commits ou enviar código para o GitHub.
  - **Solução**: Execute o comando `pnpm run lint`. Esse comando irá ajustar o código de acordo com as regras configuradas no Biome, corrigindo os problemas de formatação.

## 🔗 Links Úteis
- [React.js](https://react.dev/):para o desenvolvimento da aplicação.
- [Tailwind](https://tailwindcss.com/): Para estilização da interface de forma eficiente.
- [pnpm Filtering](https://pnpm.io/filtering): Para gerenciar e adicionar bibliotecas específicas ao projeto.
- [Documentação da API](http://localhost:3000/docs): Disponível em [http://localhost:3000/docs](http://localhost:3000/docs).
> **Nota:** Acesse a documentação apenas com o backend ativo.


## 🚀 Iniciando o projeto
1. **Verifique os Requisitos:** Certifique-se de que todas as ferramentas listadas na seção de requisitos estão instaladas corretamente.
1. **Configure o Backend:**
No diretório `projects/back`, copie o arquivo `.env.example` e renomeie-o para `.env`.
Adicione o token gerado no TMDB na variável `TMDB_TOKEN` no arquivo `.env`.
1. **Instale as Dependências:** Execute o comando: `pnpm i`
1. **Inicie o Banco de Dados:**
Verifique se o Docker está em execução na sua máquina.
Inicie os containers do banco de dados com o comando `pnpm run db:start`
1. **Inicie o Backend:** Rode o comando `pnpm run dev:back`
1. **Inicie o Frontend:** Rode o comando `pnpm run dev:front`
1. **🎉 Bora Codar!**

Agora que tudo está configurado, é hora de colocar a mão na massa e brilhar! ✨💻

Todo o código deve ser escrito dentro do diretório `projects/front`. Divirta-se desenvolvendo o desafio e mostre suas habilidades! 🚀

> 💡 Observação: Você precisará instalar o **TailwindCSS** e outras bibliotecas adicionais que considerar necessárias para o desenvolvimento do frontend.

#### 🔐 Informações do Usuário
| Info | Data |
|---|---|
| **Login** | admin@email.com |
| **Password** | Admin@123 |

## 🛠️ Comandos Úteis
| Utilidade | Data |
|---|---|
| Instalar todas as dependências | `pnpm i` |
| Iniciar o banco de dados | `pnpm run db:start` |
| Iniciar o backend | `pnpm run dev:back` |
| Iniciar o frontend | `pnpm run dev:front` |
| Instalar uma dependência específica | `pnpm add -D --filter=@sunne-test/front <dependencia>` |

> Nota: Certifique-se de rodar o comando de inicialização do banco de dados antes de iniciar o backend.

> 💡 Observação: Use o último comando para instalar bibliotecas adicionais no frontend, como o TailwindCSS, caso necessário.

## 🖼️ Referência
O link para o **Figma** com o design de referência foi enviado no e-mail juntamente com este desafio. Utilize-o como base para o desenvolvimento das páginas.

Abaixo estão as capturas de tela das páginas que devem ser implementadas:

#### Login
![Tela de Login](./docs/img/refs/LOGIN.png "Login")

#### Top 10
![Tela do top 10](./docs/img/refs/FILMES_EM_ALTA.png "top-10")

#### Likes
![Tela de Likes](./docs/img/refs/LIKES.png "likes")

#### Perfil
![Tela de Perfil](./docs/img/refs/ME.png "perfil")

## 📄 Documentação do Candidato

# Projeto Front-End 🚀

O **front-end** de um projeto que foi desenvolvido utilizando **React**, **TypeScript**, **Tailwind CSS** e diversas outras tecnologias.

## Tecnologias Utilizadas 💻

- **React**: Framework JavaScript utilizado para construir a interface interativa e gerenciar o estado da aplicação.
- **TypeScript**: Superset do JavaScript, utilizado para melhorar a qualidade do código com tipagem estática.
- **CSS**: Estilização básica das páginas e componentes.
- **Tailwind CSS**: Framework de utilitários para a estilização eficiente e responsiva.
- **Shadcn**: Biblioteca de componentes para construção de elementos UI personalizados e estilizados.
- **Tabler Icons**: Biblioteca de ícones utilizada para fornecer ícones vetoriais no projeto.
- **Axios**: Biblioteca para realizar requisições HTTP e integração com o back-end.
- **HTML**: Estruturação básica das páginas e componentes.

## Estrutura do Projeto 📂

A estrutura de pastas do front-end é organizada da seguinte maneira:

- **src/**
  - **assets/**
    - `fonts/`: Contém fontes utilizadas no projeto.
    - `images/`: Armazena as imagens estáticas.
  - **components/**
    - `[Componentes criados]`: Todos os componentes reutilizáveis criados durante o desenvolvimento.
    - `ui/`: Contém os componentes da biblioteca **Shadcn**.
  - **context/**
    - `authContext.tsx`: Arquivo responsável pelo contexto de autenticação.
  - **hooks/**
    - `[outros hooks de requisições]`: Hooks utilizados no projeto.
  - **lib/**
    - `utils.ts`: Arquivo de utilitários com funções auxiliares.
  - **pages/**
    - `[Páginas do projeto]`: Contém as páginas na aplicação.
  - **routes/**
    - `publicRoutes.tsx`: Define as rotas públicas.
    - `privateRoutes.tsx`: Define as rotas privadas.
  - **service/**
    - `api.ts`: Arquivo de configuração da API.
  - **types/**
    - `[tipos utilizados em várias partes da aplicação]`: Tipos e interfaces utilizadas em várias partes do código.


### Descrição das Pastas 📁

- **assets**: Contém arquivos estáticos como fontes e imagens.
- **components**: Armazena todos os componentes reutilizáveis do projeto, além da pasta `ui`, que contém os componentes da biblioteca **Shadcn**.
- **context**: Contém o arquivo **authContext.tsx** que gerencia o estado de autenticação do usuário.
- **hooks**: Armazena hooks personalizados, incluindo os hooks responsáveis pelas requisições de consumo das APIs.
- **lib**: Contém utilitários auxiliares, como o arquivo **utils.ts**.
- **pages**: Armazena todas as páginas acessíveis dentro do projeto.
- **routes**: Define as rotas públicas e privadas do projeto.
- **service**: Contém a configuração da API, onde as requisições HTTP são feitas.
- **types**: Contém os tipos TypeScript usados em várias partes da aplicação, como interfaces e tipos de dados.

## Integração com o Back-End 🔌

A integração com o back-end foi realizada através de **requisições HTTP** utilizando **Axios**. As funcionalidades integradas incluem:

- **Serviço de Login**: Para autenticação de usuários 🔐.
- **Carregamento de Dados do Usuário**: Exibição das informações do usuário logado 👤.
- **Exibição do Top 10 Filmes**: Exibição da lista dos filmes mais populares no momento 🎬.
- **Curtir/Descurtir Filmes**: Permite que o usuário curta ou descurta filmes na plataforma ❤️❌.
- **Visualização de Filmes Curtidos**: O usuário pode acessar os filmes que curtiu ao longo do uso da aplicação 🍿.
