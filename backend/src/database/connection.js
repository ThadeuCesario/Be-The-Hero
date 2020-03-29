const knex = require('knex');
const configuration = require('../../knexfile');
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development; //Variáveis ambientes

const connection = knex(config); //Conexão de desenvolvimento, lemebrando que no knexfile temos várias conexões.

module.exports = connection; //Agora exportamos a configuração da conexão com nosso banco de dados.