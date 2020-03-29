const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');
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

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(), //Verifica se o nome é uma string e é obrigatório.
      email: Joi.string().required().email(),  //Verifica se o email é uma string, se está preenchido e no formato de email mesmo.
      whatsapp: Joi.string().required().min(10).max(11), //Verifica se é um numero, se está preenchido, e se possúi pelo menos 10 caractéres e no máximo 11 caractéres.
      city: Joi.string().required(), // Verifica se é uma string e se está preenchido.
      uf: Joi.string().required().length(2) //Verifica se é uma string, se está preenchido e se possúi o tamanho de dois caractéres.
    })   
}), OngController.create);

/**
 * Rota para cadastro dos incidentes
 */
routes.post('/incidents', IncidentController.create);

/**
 * Rota para listagem dos incidentes
 */
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}) ,IncidentController.index);

/**
 * Rota para deletar incidentes.
 * Como para remover um incidente é algo especifico, estamos passando um route param, 
 * com o id do incidente para prosseguirmos.
 */
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required() //Nos parametros da request, deve haver um key que seja number e que esteja preenchido.
    })
}), IncidentController.delete);


/**
 * Rota para listar incidentes especificos
 */
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required() //Nesse caso será verificado se no header de nossa request, possui uma key chamada 'authorization'. Sendo que essa key deve ser required e no formato de string.
    }).unknown(),
}), ProfileController.index);

/**
 * Rota de login, que verificará se a ONG existe ou não.
 * Como quando estamos fazendo login, estamos criando uma sessão por isso utilizamos o método
 * POST. Não quer dizer que vou criar no banco de dados, mas sim a intenção que temos ao acessar
 * a determinada rota.
 * No nosso caso a intenção é criar uma nova sessão;
 */
routes.post('/sessions', SessionController.create)


module.exports = routes;