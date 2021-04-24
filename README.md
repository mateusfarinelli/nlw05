- O que é esse projeto?
  - Chat instananêo utilizando Web Sockets para ser incorporado em sites, como por exemplo um chat de atendimento para e-commerce,
  - Além disso, a aplicação utiliza banco de dados para mensagens automaticas padrões (como um chat bot)

- Quais as técnologias aplicadas?
  - Node.js,
  - TypeScript,
  - Express,
  - E mais...

- Da onde surgiu a ideia?
  - O contêudo desse projeto é de autoria da Rocketseat (www.rocketseat.com.br), ministrado durante a 5ª edição do NLW (nova estruturação para a antiga Semana Omnistack)

- Conteúdo da aula 01
  - Instalação e configuração das ferramentas (VSCode e Insomnia),
  - Instalação e explicação das principais técnologias (Node.js, Express, TypeScript),
  - Apresentação de depêndencias de desenvolvimento ligadas ao TS como ts-node-dev e @types/express,
  - Criação, explicação e configurações do tsconfig.json e package.json (incluindo scripts),
  - Explicação sobre o que é uma API e como ela funciona,
  - Inicio do projeto, subindo um servidor Node.js utilizando Express,
  - Breve explicação dos métodos HTTP, Requisições e Rotas,
  - Criação das primeiras rotas de GET e POST

  - Por minha conta:
    - Arquivo de rotas contendo as rotas criadas durante a aula. Dessa forma o projeto já fica mais organizado.
    - Criação do arquivo README que você está lendo agora, com algumas informações sobre o projeto e o mini bootcamp =D

- Conteúdo da aula 02
  - Nessa aula vamos iniciar com o banco de dados, e para essa semana iremos utilizar o SQLite  
  - Como iremos manipular o banco nesse projeto?
    - Existem básicamente 3 formas de se trabalhar com um banco de dados ao desenvolver um software, são eles:
      - Drive nativo: a sua utilização se resume em instalar o drive como dependencia do projeto e realizar as consultas com SQL (para bancos relacionais). Dessa forma a utilização pode mudar conforme o banco a ser utilizado, ou seja, o drive do Postgres pode funcionar diferente do drive do MySQL mesmo sendo bancos relacionais.
      - Query builder: são libs que auxiliam nas criações de queries SQL, o exemplo citado é o KNEX. Utilizando um query builder temos uma estrutura um pouco mais maleavel, ou seja, o knex vai funcionar "igualmente" para qualquer banco SQL, mudando basicamente as configurações como o dialeto (banco a ser utilizado). Além disso, temos queries já prontas facilitando a escrita do código
      - ORM (Object Relational Mapper): são frameworks em que existe uma abstração das entidades em forma de objeto, mapeando a estruta da entidade presente no banco de dados e objeto definido para aquela estrutura no nosso código. Dessa forma, ele nos permite uma abstração da OO para trabalhar com o banco. Para este projeto iremos utilizar o TypeORM, mas o Sequelize é um outro exemplo.
  - Instalação das dependências e configuração do TypeORM:
    - npm install typeorm reflect-metadata sqlite3
    - É feita no arquivo ormconfig.json conforme documentação, a conexão foi criada no arquivo "index.ts" no diretorio src/database
  - Migrations
    - É basicamente um históricos relacionado ao banco de dados.
    - Para que possamos criar as migrations, fizemos algumas configurações disponiveis no arquivo de configuração do typeorm, além disso uma coisa muito interessante desse ORM é que ele disponibiliza o CLI mas também um jeito de trabalhar de forma mais automatizada utilziando o comando "typeorm" no terminal, para isso veja a a seção de scripts no package.json (lembre-se de utilizar o comando npm run typeorm).
    - Para criar o arquivo de migrations utilizamos o comando npm run typeorm migrations:create -n "NomeDaMigration".
    - O arquivo de miration criado possui 2 métodos pré definidos o UP e o DOWN, que respecitavamente são executados quando queremos rodar a migration com o comando npm run typeorm migartion:run, ou, quando queremos desfazer a migration usando o comando npx typeorm migration:revert.
  - Entities
    - São as presentações das entidades que temos no nosso banco de dados em forma de classe (como um model).
    - Utilizaremos decorators por volta das propriedades da classe para que possamos em tempo de execução atribuir as propriedades e métodos das respectivas funções presentes no typeorm, para essas propriedades.
    - Para isso vamos até o tsconfig e descomentamos as linhas contendo "emitDecoratorMetadata" e "experimentalDecorators"
    - Como cada SGBD aplica o valor de uuid diferentemente um do outro (sendo necessário conhecer como é a aplicação do uuid para cada SGBD), vamos adicionar  a biblioteca uuid (npm install uuid e npm intall @types/uuid -D) ao nosso projeto, pois assim deixamos o mesmo responsavel por gerar esse uuid em vez do SGBD.
    - Nesse projeto usamos a V4 do uuid que gera a string a partir de numeros aleatórios.
    - Para que o TypeORM enxergue as entidades é preciso também fazer a configuração do path no ormconfig.json.
  - Repositorios
    - É a estrutura (classe) responsavel por fazer toda a manipulação de dados da aplicação.
    - Criamos o diretorio "src/repositories" e o arquivo "SettingsRepository.ts".
    - A classe SettingsRepository extenderá a classe Repository presente no typeORM e passamos o "Settings" como tipo dessa classe repository.
    - Decoramos também a classe com o "EntityRepository(Settings)".
  - Controller
    - É uma classe de comunicação entre a nossa rota e o repository (como um middleware).

  - Notas:
    - Bekeeper
      - Software para visualização de banco dados (como o postbird), muito leve e parece bem interessante.
  
  - Por minha conta:
    - Dividi cada rota em um arquivo, dessa forma não é preciso fazer os imports dos controllers e as chamadas das rotas em um unico arquivo. Assim o projeto fica um pouco mais organizado.


- Conteúdo da aula 03
  - Continuando a configuranção e a escrita do código relacionado ao banco de dados
  - Services
    - É uma camada a mais e que fica responsavel por realizar a regra de negócio, ou seja, nosso controller faz a chamada do método dentro do service e ele é quem faz as requisições
  - Criação da migration Users
  - Criação da migration Messages e o relacionamento com Users (veja o arquivo migrations/User para ver como criar uma FK, e o relacionamento é adicionado no arquivo de entidade no caso etities/Message).
  - Para fazer um inner join basta utilizar o parametro "relations" dentro do service, onde o get foi realizado (veja src/services/MessagesService)
  - Passando as chamadas ao repositório para dentro do constructor, parecido com uma DI no angular.

- Conteúdo da aula 04
  - Em breve

- Conteúdo da aula 05
  - Em breve