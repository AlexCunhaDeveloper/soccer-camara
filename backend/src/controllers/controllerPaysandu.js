
const Conections = require('../connectSheets/connects')
class ControllerPaysandu {
    async index(req, res){

        try {
            const Jogadores = await Conections.jogadoresPaysandu()  
            return res.status(200).json(Jogadores)
        }catch(error){
            return res.status(500).json({error: 'Error tente novamente depois'})   
        }
    }

    
}



module.exports = new ControllerPaysandu

