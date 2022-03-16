'use strict'
const Compra = use('App/Models/Compra')

class ComprarController {
    async compra ({ request, response }){
        const user = await Compra.create(request.all())
        response.json(user)
    }
}

module.exports = ComprarController
