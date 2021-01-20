
const Conections = require('../connectSheets/connects')




class ControllerRemo {
    async index(req, res){
        const Jogaores = await Conections.jogadoresRemo()
                
       return res.json(Jogaores)
    }

    inicializar(){
        this.index()
    }
}



module.exports = new ControllerRemo

