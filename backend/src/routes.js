const {Router}= require('express')
const ControllerRemo = require('./controllers/controllerRemo')
const ControllerJogos = require('./controllers/controllerJogos')
const ControllerPaysandu = require('./controllers/controllerPaysandu')
const ControllerNoticia = require('./controllers/controllerNoticia')
const route = Router()

route.get('/remo', ControllerRemo.index)
route.get('/paysandu', ControllerPaysandu.index)
route.get('/jogos', ControllerJogos.index)
route.get('/noticias', ControllerNoticia.index)


module.exports = route
