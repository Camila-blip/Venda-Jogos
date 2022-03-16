'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComprasSchema extends Schema {
  up () {
    this.create('compras', (table) => {
      table.increments()
      table.string('nome', 50)
      table.string('email', 50)
      table.string('cod', 50)
      table.integer('idJogo')
      table.timestamps()
    })
  }

  down () {
    this.drop('compras')
  }
}

module.exports = ComprasSchema
