exports.up = function(knex, Promise) {
  return knex.schema.createTable('jogador_profissional', table => {
    table.increments('id').primary()

    table.string('nome')
    table.string('apelido')
    table.boolean('posicao')
    table.string('foto')
    table.string('pais')
    table.string('time')
    table.decimal('preco')

    table.timestamps()
    table.datetime('deleted_at')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jogador_profissional')
}
