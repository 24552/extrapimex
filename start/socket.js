'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')
let nuevaconexion=0
let respuestas=0
let datosuser = []
Ws.channel('mexicanos', ({ socket }) => {
  console.log('user joined with %s socket id', socket.id)
  nuevaconexion++
  socket.on('close',()=>{
   nuevaconexion-- 
  })
  if (nuevaconexion===2){
    socket.broadcastToAll('jugar')
  }
  socket.on('enviarpregunta', (pregunta) => {
   socket.broadcast('obtenerpregunta',pregunta)
   console.log('pregunta enviada')
  })
  socket.on('enviarespuesta',() => {
    socket.broadcastToAll('obtenerespuesta')
    console.log('respuestaenviada')

    respuestas++
  if(respuestas===5){
    socket.broadcastToAll('enviartotal')
   respuestas=0
    
    
    
    
  }
   })
   socket.on('datos',(info)=>{
     datosuser.push(info)
     if (datosuser.length ===2){
      if(datosuser[0].puntos> datosuser[1].puntos) {
        socket.broadcastToAll('ganador',{ganador: datosuser[0].usuario})
      }else if(datosuser[0].puntos === datosuser[1].puntos){
        socket.broadcastToAll('ganador',{ganador: 'fue un empate'})

      }else{
        socket.broadcastToAll('ganador',{ganador: datosuser[1].usuario})

      }
     }
   })
   
})
