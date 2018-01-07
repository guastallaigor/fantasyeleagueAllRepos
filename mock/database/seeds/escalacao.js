let escalation = {
  id_usuario: 1,
  id_jogador_profissional: 2
}

exports.seed = function(knex, Promise) {
  return knex('escalacao')
    .del()
    .then(function() {
      return knex('escalacao').insert([escalation])
    })
}
