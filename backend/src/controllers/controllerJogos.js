
const Conections = require('../connectSheets/connects')
class ControllerJogos {
    async index(req, res){
        const jogos = await Conections.jogos()
                
       return res.json(jogos)
    }

    inicializar(){
        this.index()
    }
}



module.exports = new ControllerJogos

