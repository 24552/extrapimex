'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
var jwt = require('jsonwebtoken')
class Autenticado {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request
    var token = await request.header('auth')

    if(token != undefined){
    var jugador = await jwt.verify(token,'cotonete@123')
      await next()
    } else{
      return await response.status(500).json({mensaje: 'Acceso denegado'})
    }
   
    
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = Autenticado