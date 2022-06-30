Trabalho utilizando o padrão MVC

Foi feito em JavaScript, utilizando o framework para NodeJS Express e o ORM (Object Relational Mapper) Sequelize.

O Express foi utilizado no gerenciamento das rotas, que irão chamar as middlewares da aplicação. Essas middlewares fazem parte dos controllers, que por sua vez, fazem a intermediação entre as models e as views.

No userController.js está a função que irá renderizar a tela com o formulário de cadastro de usuários
e outra que irá instanciar a classe Usuario chamar o método insert, da model cru.js, que irá inserir os dados informados pelo usuário no banco de dados.

No homeController.js está a função que chama o método select, também da classe Usuario, que irá buscar os dados existentes no banco e exibi-los na tela.

As models construidas são bd.js, onde é feita a conexão com o banco de dados, através do ORM Sequelize, crud.js, onde são feitas as operações de inserção e busca do banco de dados, ainda sem os métodos de alteração e exclusão. Já a model User.js faz a construção da tabela de usuários, definindo especificações e verificações que devem ser seguidas no momento de manipular o banco.

Para as views, utilizou-se a template engine EJS, que permite a utilização de comandos de JavaScript juntamente com tags HTML, o que facilita a exibição de informações de forma dinâmica, como foi feito na view index.ejs, que recebe um objeto contendo os dados dos usuários, pecorre esse objeto e exibe os nomes e as senhas. Também permite o reaproveitamento de código, possibilitando que partes do template sejam feitos somente uma vez, necessitando apenas a importação dos mesmos para dentro dos arquivos necessários.

Na view index.ejs, são exibidos os usuários cadastrados no banco de dados.

Na view usuario.ejs, está o formulário de cadastro.