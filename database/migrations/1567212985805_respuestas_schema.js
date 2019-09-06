'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RespuestasSchema extends Schema {
  up () {
    this.create('respuestas', (table) => {
      table.increments()
      table.string('respuesta')
      table.integer('pregunta').references('id').inTable('preguntas')
      table.integer('puntos').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('respuestas')
  }
}

module.exports = RespuestasSchema
