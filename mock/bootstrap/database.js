/**
 * Database
 */
const Bookshelf = require('bookshelf')
const Paranoia = require('bookshelf-paranoia')
const config = require('config/database')[process.env.DB_CONNECTION]

const knex = require('knex')(config)

const Bs = Bookshelf(knex)

// Plugins
Bs.plugin('registry')
Bs.plugin('virtuals')
Bs.plugin('visibility')
Bs.plugin('pagination')
Bs.plugin(Paranoia)

module.exports = {
  Bookshelf: Bs,
  knex
}
