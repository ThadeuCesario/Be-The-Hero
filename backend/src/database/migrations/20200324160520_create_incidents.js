
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //Criará uma chave primária com auto incremento

        table.string('title').notNullable(); //chave primária
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Relacionamento: Qual a ONG que criou o determinado incidente
        table.string('ong_id').notNullable(); 

        table.foreign('ong_id').references('id').inTable('ongs'); //A coluna ong_id referencia a coluna 'id' na tabela 'ongs' [chave estrangeira]
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
