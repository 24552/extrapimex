'use strict'
const bd= use('Database')
const respuestas = use('App/Models/Respuesta')
class RespuestaController { 
  async mostrar({response}){
  return response.status(200).json(await respuestas.all())
}
async traerespuestas({params,response}){
 var s = await bd.select('respuesta','puntos').from('respuestas').where(params,'pregunta')
  return await response.status(200).json(s)
}
async escribir({request,response }){
  var s= await request.all()
  var n_respuesta= new respuestas()
  n_respuesta.respuesta = s.respuesta
  n_respuesta.pregunta = s.pregunta
  n_respuesta.puntos = s.puntos
  await n_respuesta.save()
  return await response.status(200).json(n_respuesta)
 }
 async borrar({request,response}){
  var s= await respuestas.find(request.input('id'))
  await s.delete()
  return await response.status(200).json(s)
}
}
module.exports = RespuestaController
