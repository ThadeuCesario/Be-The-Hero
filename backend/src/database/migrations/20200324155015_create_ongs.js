
/**
 * O método up é sempre responsável pela criação da tabela.
 */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary(); //chave primária
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); // O número '2' significa o tamanho do texto que será passado.
  });
};

/**
 * Rollback ('se der algum problema e eu precisar voltar atrás')
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
