require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet');


class Connection {
    
    async conexao(){
        try{

            const documento = new  GoogleSpreadsheet(process.env.DOCUMENT_FUTEBOL)
            await documento.useServiceAccountAuth({
                client_email: process.env.client_email,
                private_key: process.env.private_key  
            })
    
            return documento
        }catch(error){
            console.log(error)
        }
    }

    async jogadoresRemo(){
        const documento = await this.conexao()
        //const documento = await remo
        await documento.loadInfo();
        let sheet = await documento.sheetsByIndex[1]; 
        let rows = await sheet.getRows()
        let remoJogadores = []
         rows.map(row => {
            remoJogadores.push({"jogador": `${row.Jogador}`, "camisa": `${row.Camisa}`})
            //return jogadores
        })
       return remoJogadores
    }

    async jogadoresPaysandu(){
        const documento = await this.conexao()
        //const documento = await remo
        await documento.loadInfo();
        let sheet = await documento.sheetsByIndex[0]; 
        let rows = await sheet.getRows()
        let paysanduJogadores = []
         rows.map(row => {
            paysanduJogadores.push({"jogador": `${row.Jogador}`, "camisa": `${row.Camisa}`})
            //return jogadores
        })
    
       return paysanduJogadores
    }
    async jogos(){
        const documento = await this.conexao()
        //const documento = await remo
        await documento.loadInfo();
        let sheet = await documento.sheetsByIndex[2]; 
        let rows = await sheet.getRows()
        let jogos = []
         rows.map(row => {
            jogos.push({"timePaysandu": `${row.timePaysandu}`, "timeRemo": `${row.timeRemo}`, 
                        "resultado":`${row.resultado}`, "golPaysandu": `${row.golPaysandu}`, "golRemo":`${row.golRemo}`, "datajogo":`${row.jogo}`})
            //return jogadores
        })
       return jogos
    }
    async noticias(){
        const documento = await this.conexao()
        //const documento = await remo
        await documento.loadInfo();
        let sheet = await documento.sheetsByIndex[3]; 
        let rows = await sheet.getRows()
        let noticias = []
         rows.map(row => {
            noticias.push({"noticias": `${row.noticia}`})
            //return jogadores
        })
        
       return noticias
    }

    inicializar(){
        this.jogadoresPaysandu()
    }
}


module.exports = new Connection;


