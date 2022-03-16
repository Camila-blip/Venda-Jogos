'use strict'
const Loja = use('App/Models/Loja')
const Database = use('Database')
class LojaController {
    async index ({ request, response }) {
        response.json(await Loja.all()) 
    }
    async getLoja ({request,response}){
        return await Database
      .table('lojas')
      .where('id_jogo', request.params.id)
    }
}

module.exports = LojaController
