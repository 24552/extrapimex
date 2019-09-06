'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with partidas
 */

const partida = use('App/Models/Partida.js')
const bd= use('Database')

class PartidaController {
  async mostrar({response}){
    var activas = await bd.select('nombre').from('partidas').where('activa',true)
   
    return await response.status(200).json(activas)
    
    
  }

  async escribir({request, response}){
    // var p = new partida()
    var n_partida = new partida()
    var p = await request.all()
    n_partida.nombre = await p.nombre
    n_partida.activa= await p.activa
    await n_partida.save()
    return await response.status(200).json(n_partida)
  }
  async buscar({request, response}){
    var p = new partida()
    var n_partida = new partida()
    p = request.all()
    n_partida = await partida.findBy('nombre', p.nombre)
    return await response.status(200).json(n_partida.nombre)
  }
  async borrar({request,response}){
    var p = new partida()
    var n_partida = new partida()
    p = request.all()
    n_partida = await partida.findBy('nombre', p.nombre)
    await n_partida.delete()
    return response.status(200).json(n_partida)
  }
}

module.exports = PartidaController
