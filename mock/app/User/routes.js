const user = require('./controller')
const Router = require('express').Router()

Router.get('/escalacao', user.escalation)
Router.get('/saldo', user.balance)

module.exports = Router
