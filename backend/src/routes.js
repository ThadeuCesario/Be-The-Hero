const express = require('express');
const OngController = require('./controllers/OngController');
const connection = require('./database/connection'); //Importamos a configuração, assim podemos realizar a comunicação com o banco de dados
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); // Estou desacoplando o módulo de rotas do express em uma nova variável

// routes.get('/ongs', async (request, response) => {});
routes.get('/ongs', OngController.index);


/**
 * A função abaixo é assincrona pois inserimos dados no banco. Isso pode demorar um tempo
 * dessa forma sabemos que a função é assincrona e precisamos esperar a inserção no banco de 
 * dados finalizar.
 */
// routes.post('/ongs', async (request, response) => {
 
// });

routes.post('/ongs', OngController.create);

/**
 * Rota para cadastro dos incidentes
 */
routes.post('/incidents', IncidentController.create);

/**
 * Rota para listagem dos incidentes
 */
routes.get('/incidents', IncidentController.index);

/**
 * Rota para deletar incidentes.
 * Como para remover um incidente é algo especifico, estamos passando um route param, 
 * com o id do incidente para prosseguirmos.
 */
routes.delete('/incidents/:id', IncidentController.delete);


/**
 * Rota para listar incidentes especificos
 */
routes.get('/profile', ProfileController.index);

/**
 * Rota de login, que verificará se a ONG existe ou não.
 * Como quando estamos fazendo login, estamos criando uma sessão por isso utilizamos o método
 * POST. Não quer dizer que vou criar no banco de dados, mas sim a intenção que temos ao acessar
 * a determinada rota.
 * No nosso caso a intenção é criar uma nova sessão;
 */
routes.post('/sessions', SessionController.create)


module.exports = routes;