/**
 * O teste de integração testará nossa API como um todo.
 * Precisaremos de uma biblioteca para realizar chamadas de api em nosso back-end.
 * Não vamos utilizar o axios, pois não é recomendado para testes.
 * Vamos utilizar uma biblioteca chamada supertest, que consegue realizar metodos HTTP e trará algumas validações.
 */
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
    beforeEach(async () => {
        //É interessante de executar todas as migrations, nós utilizarmos um rollback. Isso é, nós estamos desfazendo nossas migrations. Assim o banco não fica gigante
        await connection.migrate.rollback();

        await connection.migrate.latest();
    }) //Antes de cada um dos testes podemos executar uma determinada função, nesse caso executaremos as migrations do nosso banco de dados.
    
    afterAll(async () => {
        await connection.destroy(); //destruindo as conexões com o banco de dados.
    }) //Executar uma ação após todos os testes serem realizados.

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name:"Amigos de Bem",
            email:"contato@teste.com.br",
            whatsapp:"11788994455",
            city:"São Paulo",
            uf:"SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});