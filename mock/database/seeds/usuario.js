const bcrypt = require('bcryptjs')

let user = {
  nome: 'Guilherme Bayer',
  email: 'guiilherme.bayer@gmail.com',
  login: 'guuibayer',
  senha: '123456',
  posicao: 1,
  status: true,
  foto: 'https://scontent.fbfh1-2.fna.fbcdn.net/v/t1.0-9/17498637_1235817106536844_3347795008833038306_n.jpg?oh=4bc8fa755165835820a87ebb9c606738&oe=59D2AA3C',
  level: 18,
  experiencia: 123.50,
  saldo: 500.00,
  pais: 'Brasil',
  rank: 310
}

exports.seed = function(knex, Promise) {
  return knex('usuario')
    .del()
    .then(function() {
      return bcrypt
        .hash(user.senha, 10)
        .then(function(hash) {
          user.senha = hash
          return knex('usuario').insert([user])
        })
    })
}
