/**
 * Bootstrap application
 *
 * All Express settings, as middleware, security, helmet are set here.
 */
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')

const config = require('config/app')
const sess = require('config/session')

const app = express()

// Settings some variables vars
app.locals.app = {
  name: config.name
}

/**
 * Cors
 */
app.use(cors())

/**
 * Security
 */
app.use(helmet())

/**
 * Logs
 */
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

consign({
  locale: config.locale
})
.include('bootstrap/database.js')
.then('app/routes.js')
.into(app)

module.exports = app
