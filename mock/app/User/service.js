const UserRepository = require('./repository')

const retrieveId = function() {
  return 1
}

const retrieveEscalation = async function() {
  let result = await UserRepository.retrieveEscalationById(retrieveId())
  return result.players
}

const retrieveBalance = async function() {
  let result = await UserRepository.retrieveBalanceById(retrieveId())
  return result
}

module.exports = {
  retrieveEscalation,
  retrieveId,
  retrieveBalance
}
