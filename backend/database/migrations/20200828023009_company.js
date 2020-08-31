exports.up = function(knex) {
  knex.schema.createTable('company', (table) => {
    table.increments();
    table.string('cnpj').unique().notNullable();
    table.string('nome').notNullable();
    table.string('logradouro').notNullable();
    table.integer('numero').notNullable();
    table.string('complemento').notNullable();
    table.string('municipio').notNullable();
    table.string('uf').notNullable();
    table.string('cep').notNullable();
    table.string('telefone').notNullable();
    table.string('email').notNullable();
    table.timestamps();
  }).then();
};

exports.down = function(knex) {
  knex.schema.dropTable('company');
};
