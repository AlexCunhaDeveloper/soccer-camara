
const Conections = require('../connectSheets/connects')
class ControllerRemo {
    async index(req, res){
        const jogadores = await Conections.jogadoresRemo()
       return res.status(200).json(jogadores)
    }


}



module.exports = new ControllerRemo

