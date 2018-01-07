const player = require('./controller')
const Router = require('express').Router()

/**
 * Domain routes
 */
Router.post('/comprar/:id', player.buy)
Router.post('/vender/:id', player.sell)
Router.get('/posicao/:posicao', player.retrieveAllByPosition)
Router.get('/destaques', player.retrieveHighlights)

/**
 * CRUD routes
 */
Router.get('/:id', player.retrieve)
Router.post('/', player.create)


module.exports = Router
