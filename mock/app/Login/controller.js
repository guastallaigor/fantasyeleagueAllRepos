/**
 * Auth Controller
 */
const Auth = require('./auth')

function signin(request, response) {
  let session = request.session
  const {username, password} = request.body

  Auth.authenticate(username, password).then(token => {
    if (!token) {
      Auth.handleFailAuthenticate(response)
    }

    response.format({
      json: () => response.json({token})
    })
  })
  .catch(error => {
    throw Error(error)
  })
}

function signout(request, response) {
  /**
   * @TODO: Create const to define redirect after logout
   */
  request.session.destory(() => response.redirect('/'))
}

module.exports = {
  signin,
  signout
}
