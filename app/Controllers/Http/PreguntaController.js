'use strict'
const respuestas = use('App/Models/Respuesta')

const preguntas = use('App/Models/Pregunta.js')
class PreguntaController {
  async mostrar({response}){
    return response.status(200).json(await preguntas.all())
  }
  async traerpregunta({params,response}){
    return response.status(200).json(await preguntas.find(params.id))
  }
  async escribir({request,response }){
    var n_pregunta= new preguntas()
    n_pregunta.pregunta = request.input('pregunta')
    await n_pregunta.save()
    const arreglo = request.input('respuestas')
    arreglo.forEach(element => {
     this.guardarrespuestas (element,n_pregunta.id) 
    });
    return await response.status(200).json(n_pregunta)
   }
   async borrar({request,response}){
    var s= await preguntas.find(request.input('id'))
    await s.delete()
    return await response.status(200).json(s)
  }
  async guardarrespuestas(respuesta,idpregunta)
  {
    const registro = new respuestas()
    registro.respuesta = respuesta.respuesta
    registro.puntos = respuesta.puntos
    registro.pregunta = idpregunta
    await registro.save()
 
  }
    async guardarrespuestas(respuesta,idpregunta)
  {
    const registro = new respuestas()
    registro.respuesta = respuesta.respuesta
    registro.puntos = respuesta.puntos
    registro.pregunta = idpregunta
    await registro.save()
 
  }

}

module.exports = PreguntaController
