'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlataformasSchema extends Schema {
  up () {
    this.create('plataformas', (table) => {
      table.increments()
      table.string('nome_plataforma', 50)
      table.integer('id_jogo')
      table.timestamps()
    })
  }

  down () {
    this.drop('plataformas')
  }
}

module.exports = PlataformasSchema
