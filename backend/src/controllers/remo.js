
const Conections = require('../connectSheets/connects')
class ControllerRemo {
    async index(req, res){
        const jogadores = await Conections.jogadoresRemo()
                
       return res.json(jogadores)
    }

    inicializar(){
        this.index()
    }
}



module.exports = new ControllerRemo

