'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
//Usuarios
Route.get('/usuarios', 'UsuarioController.mostrar')
Route.get('/buscarUsuario', 'UsuarioController.buscar')
Route.post('/regUsuario', 'UsuarioController.escribir')
Route.post('/login', 'UsuarioController.login')
Route.delete('/borrarUsuario/:username', 'UsuarioController.borrar')
Route.post('/actualizarUsuario', 'UsuarioController.actualizar')
//preguntas
Route.post('/nuevaspreguntas', 'PreguntaController.escribir')
Route.delete('/eliminarpreguntas','PreguntaController.borrar')
Route.get('/mostrarpreguntas','PreguntaController.mostrar')
Route.get('/traerpregunta/:id','PreguntaController.traerpregunta')
//respuestas
Route.post('/nuevasrespuestas', 'RespuestaController.escribir')
Route.delete('/eliminarrespuestas','RespuestaController.borrar')
Route.get('/mostrarespuestas','RespuestaController.mostrar')
Route.get('/traerespuestas/:pregunta','RespuestaController.traerespuestas')
// Partidas
Route.get('/partidas', 'PartidaController.mostrar')
Route.post('/nuevaPartida', 'PartidaController.escribir')
Route.post('/buscarPartida', 'PartidaController.buscar')
Route.delete('/borrarPartida', 'PartidaController.borrar')