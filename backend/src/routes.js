const {Router}= require('express')
const ControllerRemo = require('./controllers/remo')
const route = Router()

route.get('/remo', ControllerRemo.index)


module.exports = route
