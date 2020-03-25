const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //Conexão de desenvolvimento, lemebrando que no knexfile temos várias conexões.

module.exports = connection; //Agora exportamos a configuração da conexão com nosso banco de dados.