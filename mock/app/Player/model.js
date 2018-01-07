const moment = require('moment')
const Db = require('bootstrap/database').Bookshelf

const Player = Db.Model.extend({
  tableName: 'jogador_profissional',
  softDelete: true,
  virtuals: {
    created: function() {
      return moment(this.created_at).format('LLL')
    }
  }
})

module.exports = Db.model('Player', Player)
