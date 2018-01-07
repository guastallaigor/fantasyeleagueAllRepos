module.exports = {
  secret: process.env.APP_SECRET || 'secret',
  name: process.env.SESSION_NAME || 'app.sid'
}
