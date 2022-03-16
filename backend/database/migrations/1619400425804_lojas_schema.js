'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LojasSchema extends Schema {
  up () {
    this.create('lojas', (table) => {
      table.increments()
      table.string('nome_loja', 50)
      table.integer('id_jogo')
      table.timestamps()
    })
  }

  down () {
    this.drop('lojas')
  }
}

module.exports = LojasSchema
