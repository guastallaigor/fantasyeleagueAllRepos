require('dotenv/config')

const config = require('./config/database')
const db = config[process.env.DB_CONNECTION]

module.exports = {
  development: db,
  staging: db,
  production: db,
  test: db
}
