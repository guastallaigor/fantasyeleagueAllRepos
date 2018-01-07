exports.up = function(knex, Promise) {
  return knex.schema.createTable('usuario', table => {
    table.increments('id').primary()

    table.integer('id_ligas')

    table.string('nome')
    table.string('email')
    table.string('login')
    table.string('senha')
    table.integer('posicao')
    table.boolean('status')
    table.string('foto')
    table.datetime('data_nascimento')
    table.integer('level')
    table.decimal('experiencia')
    table.decimal('saldo')
    table.string('pais')
    table.integer('rank')

    table.timestamps()
    table.datetime('deleted_at')

    table.unique(['email', 'login'])
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('usuario')
}
