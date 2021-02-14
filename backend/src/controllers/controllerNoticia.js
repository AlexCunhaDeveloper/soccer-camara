
const Conections = require('../connectSheets/connects')
class ControllerNoticia {
    async index(req, res){
        try {

            const noticia = await Conections.noticias()       
            return res.status(200).json(noticia)
        }catch(error){
            return res.status(500).json({error: 'Error tente novamente depois'})
        }
    }

}



module.exports = new ControllerNoticia

