const UserService = require('./service')

const escalation = async function(request, response) {
  let result = await UserService.retrieveEscalation()
  response.send(result)
}

const balance = async function(request, response) {
  let result = await UserService.retrieveBalance()
  response.send(result)
}


module.exports = {
  escalation,
  balance
}
