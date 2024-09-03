# sistema_gerenciamento_tarefas

Requisitos
==========
Para esse projeto é necessário instalar os seguintes softwares: 

    - node versão v20.17.0 - https://nodejs.org/en/download/
    
    - MongoDB versão 7.0 - https://www.mongodb.com/try/download/community?tck=docs_server (de preferência não instalar a versão as a Service/AAS desmarcando a caixinha com essa opção)
        . É necessário ir em 'C:/' e criar as pastas 'data/db' para conseguir executar o mongodb;

    - Para testar as endpoints de API manualmente, é possível utilizar uma extensão disponível na IDE VSCode chamada 'REST Client'
        . ao baixar o REST Client e utilizar arquivos deixados na raiz de cada API chamados `requests.http`;
        . Após baixar a extensão, botões com o texto 'send request' aparecerão acima das rotas, clicar nesse botão dispara uma requisição;

Para executar
=============
Para funcionamento pleno de todos os serviços, é necessário executar 4 scripts diferentes em CLI (linha de comando), são eles:

    - Instância do MongoDB (persistência de dados):
        . É necessário executar uma instância do MongoDB para que a persistência ocorra normalmente;
        . Acesse via CLI a rota da instalação do MongoDB em seu computador (Se for a padrão do windows possivelmente é "C:/'Program Files'/   MongoDB/Server/7.0/bin");
        . Quando estiver na pasta bin via CLI, execute o script 'mongod' e deixe rodando; 
    
    - portal-tarefas (frontend):
        . É necessário acessar a pasta 'portal-tarefas' desse repositório via CLI e rodar o script `npm install`;
        . Após a instalação ser concluída, é necessário rodar o script `npm start` para iniciar o serviço e deixá-lo rodando;
    
    - tarefa-service (API de tarefas):
        . É necessário acessar a pasta 'tarefa-service' desse repositório via CLI e rodar o script `npm install`;
        . Após a instalação ser concluída, é necessário rodar o script `npm run start:dev` para iniciar o serviço e deixá-lo rodando;

    - usuario-service (API de usuários):
        . É necessário acessar a pasta 'usuario-service' desse repositório via CLI e rodar o script `npm install`;
        . Após a instalação ser concluída, é necessário rodar o script `npm run start:dev` para iniciar o serviço e deixá-lo rodando;

Decisões tomadas
================

- A descrição do problema foi muito aberta em relação a qualquer das tarefas pedidas, como CRUD de tarefas e usuários por exemplo, portanto eu fiz todas as operações básicas de CRUD para ambos serviços implementando uso delas no Frontend de modo a satisfazer a manipulação do sistema para o caso das Tarefas, e futuramente com uso amplo também para usuários;

- A Stack escolhida para o BackEnd foi a seguinte:
    . JavaScript/TypeScript com node.js;
    . Framework Nest.JS para estrutura das APIs;
    . MongoDB utilizando a Lib Mongoose;

- A stack escolhida para o FrontEnd foi a seguinte:
    . JavaScript/TypeScript;
    . React;
    . Redux para gerenciamento de estados;
    . Axios para envio de requisições para APIs;
    . CoreUI para design e estilização de componentes;

- No problema não estava claro como deveriam ser executadas as operações, decidi por usar uma API REST.
- Optei por criar a automação realizando utilizando a biblioteca Tasks para um melhor controle de fluxo.