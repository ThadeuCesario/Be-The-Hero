/**
 * Como precisará de conexão com o banco, colocamos essa conexão no começo do arquivo.
 */
const connection = require('../database/connection'); //Importamos a configuração, assim podemos realizar a comunicação com o banco de dados
const crypto = require('crypto'); //Podemos gerar um método de crypto para gerar um hash

module.exports = {

    async index(request, response) {
        /**
         * Estamos utilizando await pois queremos aguardar esse código finalizar, quando a função
         * for executada.
         */
        const ongs = await connection('ongs').select('*'); //Fazemos uma query querendo selecionar todos os campos da tabela ONG.

        return response.json(ongs); //retorno a responsa no formato json
    },

    async create(request, response) {
        // const paramsQuery = request.query;    //Query Params
        // const paramsRoute = request.params;   //Route Params
        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = request.body;

        /**
         * Abaixo, utilizando o crypto. Estamos gerando um id de 4 bytes com caracteres hexadecimal.
         */
        const id = crypto.randomBytes(4).toString('HEX');

        // console.log(paramsQuery);
        // console.log(paramsRoute);

        /**
         * No método abaixo connection passo a tabela na qual vou inserir dados. No caso ('ongs').
         * Passamos o método 'insert', e passamos um objeto com todas a colunas que desejamos
         * inserir.
         * 
         * Como o insert pode demorar um pouco, eu preciso retornar os dados em formato JSON,
         * somente após a inserção dos dados no banco, esteja sido finalizada.
         * Assim garantimos sincronismo. Desta forma, utilizaremos async await
         */
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        /**
         * A resposta para a ONG será somente o ID, pois o ID será a forma com que a ONG conseguirá acessar
         * lembrando que o id foi gerando de forma randomica pelo crypto. Utilizando 4 bytes e na base hexadecimal.
         */
        return response.json({
            id
        });
    }
};