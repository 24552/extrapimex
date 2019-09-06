'use strict'


const user = use('App/Models/User.js')
var Hash = use('Hash')
var jwt = require('jsonwebtoken')

class UsuarioController {
    async mostrar(){
        return await user.all()
    }
    async escribir({request, response}){
        
        const usuario = new user();
        usuario.username = request.input('username');
        usuario.email = request.input('email');
        usuario.password = request.input('password');
        usuario.tipo = request.input('tipo')
       
        await usuario.save()
        return response.status(200).json(usuario)
    }

    async login({request, response}){
        var usuario = new user()
        var u = new user()
        usuario = await user.all()
        u = await request.all()
        var us = await user.findBy('username',u.username)
        if(us != undefined){
            const verify = await Hash.verify(u.password, us.password )
            if(verify){
                return response.status(200).json({verify:jwt.sign({us},'casa@123'),'tipo': us.tipo, 'id': us.id, 'username': us.username})
            }else{
                return response.status(403).json('Contraseña incorrecta')     
            }
        }else{
            return response.status(400).json('Usuario no existente')
        }
    }

    async borrar({params, response}){
        
        const us = await user.findBy('username', params.username)

        await us.delete()
        return response.status(200).json('Usuario Eliminado')
    }
    async buscar({request, response}){
        
        const us = await user.findBy('username', request.input('username'))

        
        return response.status(200).json(us)
    }

    async actualizar({request, response}){
        const us = await user.findBy('username', request.input('username'))
        us.password = request.input('password')
        us.email = request.input('email')
        await us.save()
        return response.status(200).json(us, 'Cambios Guardados')
    }
}

module.exports = UsuarioController
