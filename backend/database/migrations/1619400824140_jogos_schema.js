'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogosSchema extends Schema {
  up () {
    this.create('jogos', (table) => {
      table.increments()
      table.string('nome_jogo', 255)
      table.text('descricao', 'longtext')
      table.text('foto', 'longtext')
      table.decimal('preco')
      table.timestamps()
    })
  }

  down () {
    this.drop('jogos')
  }
}

module.exports = JogosSchema
