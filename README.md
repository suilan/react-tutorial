# React-training

Treinamento de React

## Requisitos
- Docker
- MongoDB
- Insomnia
- NodeJs
- Android SDK

### Docker + Mongo
Instalação do Docker: https://docs.docker.com/install/

Terminal:
<pre>
docker search mongo
docker pull mongo
docker run -d -p 27017:27017 --name cursoReact mongo
docker container list --all
</pre>

Alternativa:
https://www.mongodb.com/download-center
- Criar um usuário
- Clicar no menu *Database Access*
- Clicar no botão *Add new User*
- Inserir usuário e senha e salvar
- Clicar no menu *Network Access*
- Clicar no botão *Add IP Address*
- Clicar no botão *Allow access from anywhere* e confirmar
- Clicar no menu *Clusters*
- Clicar no botão *Connect*
- Clicar no botão *Connect your application*
- Copiar o texto em "Connection String Only"

### Insomnia
Instalação do Insomnia: https://insomnia.rest/download/
- Criar uma pasta no Insominia com o nome CursoReact
- Criar o request: All users - GET : http://localhost:3008/api
- Criar o request: Create user - Post : http://localhost:3008/api
- Criar o request: Get By Id - GET : http://localhost:3008/api/[id]


### NodeJs
Instalação do Nodejs: https://nodejs.org/en/download/
Instalação do Yarn: npm install yarn 

### Android SDK + Outras dependências
Instalação: http://thready.com.br/blog/

## Configuração dos projetos
O repositório possui 2 projetos: **backend** e **frontend**.

- Rodar no terminal, dentro do diretório backend: **yarn init** ou **npm init**.
- Rodar no terminal, dentro do diretório frontend: **yarn init** ou **npm init**.
- Copiar a string de conexão do MongoDB no arquivo: **./backend/server.js**

## Rodando
- Rodar no terminal, dentro do diretório backend: **yarn run dev**
- Rodar no terminal, dentro do diretório frontend: **yarn start**
- Testar no Insomnia os endpoints






