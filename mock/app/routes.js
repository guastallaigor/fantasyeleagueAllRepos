const User = require('./User')
const Player = require('./Player')
const Login = require('./Login')

module.exports = app => {
  app.use('/', Login)
  app.use('/usuario', User)
  app.use('/jogador', Player)
}
