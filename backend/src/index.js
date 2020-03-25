const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/* Utilizando, 'app.use(express.json());' estamos solicitando para o express antes de cada 
 * requisição converter o json em um objeto do javascript. 
 */
app.use(cors());//Podemos passar uma origin como parametro para prod, para que o front acesse a url específica.
app.use(express.json()); 
app.use(routes);
/**
 *  Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o '?' (servindo geralmente para filtros e
 * paginação)
 * 
 * Route Params: Parâmetros utilizados para identificar recursos. Exemplo: 
 *      app.get('/users/:id', ...)
 * No 'Route Params' não posso enviar parâmetros a mais do que está sendo esperado.
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 * Por exemplo, quando vou criar um usuário preciso enviar todos os dados relacionado ao 
 * usuário.
 *      app.post('/users', ...)
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where();
 */
    


app.listen(3333)
