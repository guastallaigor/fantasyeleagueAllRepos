let professionalPlayer = {
  nome: 'Felipe Ca Yeg Zhao',
  posicao: 1,
  foto: 'https://lolstatic-a.akamaihd.net/esports-assets/production/player/yang-c5hgprn2.png',
  pais: 'Brasil',
  time: 'https://lolstatic-a.akamaihd.net/esports-assets/production/team/keyd-stars-nfeuczv.png',
  apelido: 'Yang',
  preco: 89.90
}

exports.seed = function(knex, Promise) {
  return knex('jogador_profissional')
    .del()
    .then(function() {
      return knex('jogador_profissional').insert([professionalPlayer])
    })
}
