
const Conections = require('../connectSheets/connects')
class ControllerPaysandu {
    async index(req, res){
        const Jogadores = await Conections.jogadoresPaysandu()
                
       return res.json(Jogadores)
    }

    inicializar(){
        this.index()
    }
}



module.exports = new ControllerPaysandu

