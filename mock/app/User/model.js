const bcrypt = require('bcryptjs')
const moment = require('moment')
const Db = require('bootstrap/database').Bookshelf

const Player = require('app/Player/model')

const User = Db.Model.extend({
  tableName: 'usuario',
  softDelete: true,
  hidden: ['senha'],
  players: function() {
    return this.belongsToMany(Player, 'escalacao', 'id_usuario', 'id_jogador_profissional')
  },
  virtuals: {
    created: function() {
      return moment(this.created_at).format('LLL')
    }
  },
  initialize: function() {
    this.on('creating', this.hash, this)
  },
  hash: function(model, attrs, options) {
    return new Promise(function(resolve, reject) {
      return bcrypt
        .hash(model.attributes.senha, 10)
        .then(hash => {
          model.set('senha', hash)
          resolve(hash)
        })
        .catch(err => reject(err))
    })
  }
})

module.exports = Db.model('User', User)
