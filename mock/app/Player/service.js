let UserRepository = require('app/User/repository')
let UserService = require('app/User/service')
let PlayerRepository = require('./repository')


/**
 * Cria um novo jogador profissional.
 * @param {object} player
 */
const create = async function(player) {
  return await PlayerRepository.create(player)
}


/**
 * Recupera todos jogadores de uma posição especifica.
 * @param {string} position
 */
const retrieveAllByPosition = async function(position) {
  let results = await PlayerRepository.retrieveAllByPosition(position)
  return results
}


/**
 * Recupera informações de um jogador.
 * @param {int} playerId
 */
const retrieveById = async function(playerId) {
  let result = await PlayerRepository.retrieveById(playerId)
  return result
}


/**
 * Recupera os jogadores destaques
 */
const retrieveHighlights = async function() {
  let result = await PlayerRepository.retrieveHighlights()
  return result
}


/**
 * Faz a venda de um jogador.
 * @param {int} playerId
 */
const sell = async function(playerId) {
  let result = await increase(parseInt(1), parseInt(playerId))
  return result
}


/**
 * Faz a compra de um jogador.
 * @param {int} playerId
 */
const buy = async function(playerId) {
  let isPurchasable = await isPurchasePossible(
    playerId,
    UserService.retrieveId()
  )

  let isPositionFree = await isPositionAvailable(playerId)

  if (isPurchasable && isPositionFree) {
    deduct(UserService.retrieveId(), isPurchasable)
    climb(UserService.retrieveId(), playerId)

    return {
      error: false,
      message: 'Compra realizada com sucesso.'
    }
  }

  return {
    error: true,
    message: 'Erro ao realizar a compra do jogador.'
  }
}


/**
 * Retorna TRUE caso a possição está disponível.
 * @param {int} playerId
 */
const isPositionAvailable = async function(playerId) {
  let position = await PlayerRepository.retrievePosition(playerId)

  if (!position) {
    return false
  }

  let isAvailable = await UserRepository.isPositionAvailable(
    parseInt(1),
    position.posicao
  )

  if (isAvailable.players.length) {
    return false
  }

  return true
}


/**
 * Verifica se o usuário possuí saldo para comprar o jogador.
 * @param {int} playerId
 * @param {int} userId
 */
const isPurchasePossible = async function(playerId, userId) {
  let price = await PlayerRepository.retrievePrice(playerId)
  let balance = await UserRepository.retrieveBalanceById(userId)

  if (!price || !balance) {
    return false
  }

  let deductedValue = parseFloat(balance.saldo) - parseFloat(price.preco)

  if (deductedValue < 0) {
    return false
  }

  return deductedValue
}


/**
 * Faz o desconto do preço do jogador no saldo do usuário.
 * @param {int} userId
 * @param {float} deductedValue
 */
const deduct = async function(userId, deductedValue) {
  return await UserRepository.deductOfBalanceById(userId, deductedValue)
}


/**
 * Método para venda de um jogador.
 *
 * @param {int} userId
 * @param {int} playerId
 */
const increase = async function(userId, playerId) {
  let escalation = await UserRepository.playerInEscalationById(userId, playerId)

  if (!escalation.players.length) {
    return {
      error: true,
      message: 'Jogador não está na escalação.'
    }
  }

  let balance = await UserRepository.retrieveBalanceById(userId)

  if (!balance) {
    return {
      error: true,
      message: 'Erro ao recuperar saldo do usuário.'
    }
  }

  let finalValue = parseFloat(balance.saldo) + parseFloat(escalation.players[0].preco)
  let unclimbed = await UserRepository.unclimbAnPlayer(userId, playerId)
  let increased = await UserRepository.increaseToBalanceById(userId, finalValue)

  if (!unclimbed || !increased) {
    return {
      error: true,
      message: 'Erro ao vender jogador.'
    }
  }

    return {
      error: false,
      message: `Adicionado $${escalation.players[0].preco} a seu saldo.`
    }
}


/**
 * Adiciona um jogador a escalação do usuário.
 *
 * @param {int} userId
 * @param {int} playerId
 */
const climb = async function(userId, playerId) {
  return await UserRepository.climbAnPlayer(playerId, userId)
}


module.exports = {
  buy,
  sell,
  retrieveAllByPosition,
  create,
  retrieveHighlights,
  retrieveById
}
