const Router = require('express').Router()
const login = require('./controller')

Router.post('/logar', login.signin)
Router.get('/deslogar', login.signout)

module.exports = Router
