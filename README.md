<p align="center">
  <img src="./docs/img/SunCine.png" width="500" alt="SunCine Logo" />
</p>
</br>

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=nodedotjs&logoColor=white&labelColor=black" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=black" />
  <img src="https://img.shields.io/badge/Docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white&labelColor=black" />
</div>

# 🎬 SunCine
O SunCine é uma plataforma de filmes projetada para fornecer informações detalhadas sobre os filmes mais populares, além de permitir que os usuários curtam seus filmes favoritos e gerenciem preferências pessoais.

## 🎯 Desafio (Frontend Jr.)
O objetivo deste desafio é desenvolver 4 páginas web a partir do material de referência fornecido, utilizando as seguintes tecnologias: _Node.js_, _Vite_, _React.js_, _TailwindCSS_, e quaisquer outras bibliotecas que você julgue necessárias.

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
Este projeto utiliza a arquitetura **monorepo** com o gerenciador de pacotes `pnpm`. O seu código deve ser desenvolvido dentro do subprojeto: `project/front/`

## ✅ Avaliação 
O desafio consiste em desenvolver os componentes conforme o material de referência. No entanto, entendemos que o tempo de desenvolvimento pode ser limitado. Por isso, o foco principal deve estar em:

- Criar todas as telas com suas **funcionalidades básicas**.
- Implementar corretamente o **fluxo de navegação e autenticação**.

Se não for possível reproduzir todos os detalhes do design, envie o resultado mesmo assim. A avaliação irá considerar mais do que a similaridade com o material de referência.

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
