const User = require('./model')


const retrieveById = async function(id) {
  return User
    .where({ id: id })
    .fetch()
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const retrieveEscalationById = async function(id) {
  return User
    .where({ id: id })
    .fetch({ withRelated: ['players'] })
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const playerInEscalationById = async function(userId, playerId) {
  return User
    .where({ id: userId })
    .fetch({ withRelated: [{
      players: query => query.where('id', playerId)
    }]})
    .then(result => {
      if (!result) {
        return
      }

      return result.toJSON()
    })
}


const retrieveBalanceById = async function(id) {
  return User
    .where({ id: id })
    .fetch({ columns: ['saldo'] })
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const increaseToBalanceById = async function(id, value) {
  return User
    .forge({ id: id })
    .save({ saldo: value })
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const deductOfBalanceById = async function(id, value) {
  return User
    .forge({ id: id })
    .save({ saldo: value })
    .then(result => {
      if (!result) {
        return false
      }

      return result.toJSON()
    })
}


const isPositionAvailable = async function(userId, position) {
  return User
    .where({ id: userId })
    .fetch({ withRelated: [{
      players: query => query.where('posicao', position)
    }]})
    .then(result => {
      if (!result) {
        return
      }

      return result.toJSON()
    })
}


const unclimbAnPlayer = async function(userId, playerId) {
  return User
    .forge({ id: userId })
    .fetch()
    .then(user => {
       return user
        .players()
        .detach(playerId)
        .then(result => {
          if (!result) {
            return false
          }

          return true
        })
    })
}


const climbAnPlayer = async function(playerId, userId) {
  return User
    .forge({ id: userId })
    .fetch()
    .then(user => {
       return user
        .players()
        .attach(playerId)
        .then(result => {
          if (!result) {
            return false
          }

          return result.toJSON()
        })
    })
}


module.exports = {
  retrieveBalanceById,
  deductOfBalanceById,
  isPositionAvailable,
  climbAnPlayer,
  retrieveById,
  unclimbAnPlayer,
  playerInEscalationById,
  retrieveEscalationById,
  increaseToBalanceById
}
