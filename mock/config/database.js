const migrations = {
  directory: './database/migrations',
  tableName: 'migrations'
}

const seeds = {
  directory: './database/seeds'
}

module.exports = {
  mysql: {
    client: 'mysql',
    migrations: migrations,
    seeds: seeds,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    }
  }
}
