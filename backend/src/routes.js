const {Router}= require('express')
const ControllerRemo = require('./controllers/remo')
const ControllerPaysandu = require('./controllers/controllerPaysandu')
const ControllerJogos = require('./controllers/controllerJogos')
const route = Router()

route.get('/remo', ControllerRemo.index)
route.get('/paysandu', ControllerPaysandu.index)
route.get('/jogos', ControllerJogos.index)


module.exports = route
