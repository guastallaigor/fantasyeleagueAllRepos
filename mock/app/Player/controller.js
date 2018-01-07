let PlayerService = require('./service')

const sell = async function(request, response) {
  let playerId = request.params.id
  let result = await PlayerService.sell(playerId)

  response.send(result)
}

const buy = async function(request, response) {
  let playerId = request.params.id
  let result = await PlayerService.buy(playerId)

  response.send(result)
}

const retrieveAllByPosition = async function(request, response) {
  let position = request.params.posicao
  let result = await PlayerService.retrieveAllByPosition(position)

  response.send(result)
}

const retrieve = async function(request, response) {
  let id = request.params.id
  let result = await PlayerService.retrieveById(id)

  response.send(result)
}

const create = async function(request, response) {
  let player = {
    nome: request.body.nome,
    apelido: request.body.apelido,
    posicao: request.body.posicao,
    foto: request.body.foto,
    pais: request.body.pais,
    time_foto: request.body.time_foto,
    time_nome: request.body.time_nome,
    pontuacao: request.body.pontuacao,
    preco: request.body.preco
  }

  let result = await PlayerService.create(player)
  response.send(result)
}

const retrieveHighlights = async function(request, response) {
  let result = await PlayerService.retrieveHighlights()
  response.send(result)
}

module.exports = {
  sell,
  buy,
  retrieveAllByPosition,
  retrieve,
  create,
  retrieveHighlights
}
