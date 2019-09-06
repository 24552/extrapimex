'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PreguntasSchema extends Schema {
  up () {
    this.create('preguntas', (table) => {
      table.increments()
      table.string('pregunta')
      table.timestamps()
    })
  }

  down () {
    this.drop('preguntas')
  }
}

module.exports = PreguntasSchema
