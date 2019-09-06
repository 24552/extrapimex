'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Partida extends Model {
    static get primaryKey () {
        return 'partida_id'
      }
}

module.exports = Partida
