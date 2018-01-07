const Player = require('./model')

const create = async function(player) {
  return Player
    .forge(player)
    .save()
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const retrieveHighlights = async function() {
  return Player
    .where('pontuacao', '>', 140)
    .fetchAll()
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const retrieveAllByPosition = async function(position) {
  return Player
    .where({ posicao: position })
    .fetchAll()
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const retrieveById = async function(id) {
  return Player
    .where({ id: id })
    .fetch()
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const retrievePosition = async function(id) {
  return Player
    .where({ id: id })
    .fetch({ columns: ['posicao'] })
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}

const retrievePrice = async function(id) {
  return Player
    .where({ id: id })
    .fetch({ columns: ['preco'] })
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}

module.exports = {
  retrievePrice,
  retrievePosition,
  retrieveAllByPosition,
  retrieveHighlights,
  create,
  retrieveById
}
