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
        . Acesse via CLI a rota da instalação do MongoDB em seu computador (Se for a padrão do windows possivelmente é "C:/'Program Files'/MongoDB/Server/7.0/bin");
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

    ** IMPORTANTE
    - é necessário utilizar o REST Client (citado na seção de Requisitos) para inserir o usuário 'admin' acessando o arquivo 'requests.http' e clicando em 'send request' na requisição 'POST http://localhost:3100/users' para que essa sirva como conta de acesso ao sistema;
        .fazer isso depois que a instância do MongoDB e o usuario-service estiverem rodando;

Decisões tomadas
================

- A descrição do problema foi muito aberta em relação a qualquer das tarefas pedidas, como CRUD de tarefas e usuários por exemplo, portanto eu fiz todas as operações básicas de CRUD para ambos serviços implementando uso delas no Frontend de modo a satisfazer a manipulação do sistema para o caso das Tarefas, e futuramente com uso amplo também para usuários;

- A Stack escolhida para o BackEnd foi a seguinte:
    . JavaScript/TypeScript com node.js (Escolhido pela aptidão que já possuo em javascript e pelo conhecimento prévio que tinha de APIs em JavaScript tanto em Express.js quanto em Nest.js);
    . Framework Nest.JS para estrutura das APIs (Escolhi pela maior modularidade da framework e por combinar bastante com a arquitetura de microsserviços);
    . MongoDB utilizando a Lib Mongoose (Escolhi MongoDB pelo conhecimento prévio/maior domínio desse SGBD além da maior flexibilidade que ele permite para tipos diferentes de dados como documentos que podem possuir dados opcionais, que é algo razoável de se ter em um sistema de tarefas para complementá-las como um PDF de explicação por exemplo);

- A stack escolhida para o FrontEnd foi a seguinte:
    . JavaScript/TypeScript (utilizei majoritariamente typescript pela grande ajuda na manutenabilidade para grandes projetos e a longo prazo);
    . React (Escolhi React pela praticidade e familiaridade tanto com Hooks quanto Componentes de Classe/LyfeCicle Methods);
    . Redux para gerenciamento de estados (Pela grande compatibilidade com React nessa tarefa de gerenciamento de estados);
    . Axios para envio de requisições para APIs;
    . CoreUI para design e estilização de componentes (Utilizei pelo prazo apertado demais para focar em estilização, como a biblioteca fornece componentes bem estilizados e sóbreos, achei que se encaixaria bem com o propósito do projeto);

- Foi feita a simulação de uma arquitetura de microsserviços com os serviços de usuário e tarefas, porém por falta de tempo para elaboração a conexão deles ao servidor do Mongo é a mesma;

- Infelizmente, houveram coisas que eu não consegui implementar por falta de tempo hábil como por exemplo a endpoint de validação do token após o login, porém mesmo assim consegui fazer uma simulação de proteção das páginas após o login que eu sei que possui algumas vulnerabilidades porém era a única maneira possível de se implementar visando o tempo;

- Além disso, eu tinha planos para de incluir um formulário para manipulação de usuários no frontend também, porém pelo motivo de falta de tempo hábil, ficou por enquanto apenas como uma ideia que pretendo implementar futuramente;

- Agradeço muito quaisquer críticas, sejam positivas ou relativas em relação ao meu trabalho, pretendo usar essa tarefa como pontapé pra trabalhar mais profundamente no meu repositório do GitHub, desde já, muito obrigado pela oportunidade!!!;