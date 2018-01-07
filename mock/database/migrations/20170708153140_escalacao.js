exports.up = function(knex, Promise) {
  return knex.schema.createTable('escalacao', table => {
    table.integer('id_usuario').references('id').inTable('usuario')
    table.integer('id_jogador_profissional').references('id').inTable('jogador_profissional')

    table.timestamps()
    table.datetime('deleted_at')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('escalacao')
}
