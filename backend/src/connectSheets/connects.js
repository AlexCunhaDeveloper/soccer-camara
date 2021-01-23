const creds = require('../../camara-302118-4508d2118ba2.json')
const planilha = require('../../documentos.json')

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { client_email, private_key } = creds
const TOKEN_KEY = private_key
const TOKEN_EMAIL = client_email

class Connection {
    
    async conexao(){
        const documento = new  GoogleSpreadsheet(planilha.futebol)
        await documento.useServiceAccountAuth({
            client_email: TOKEN_EMAIL,
            private_key: TOKEN_KEY
            
        })

        return documento
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
                        "resultado":`${row.resultado}`, "golPaysandu": `${row.golPaysandu}`, "golRemo":`${row.golRemo}`})
            //return jogadores
        })
        console.log(jogos)
       return jogos
    }

    inicializar(){
        this.jogadoresPaysandu()
    }
}

const connect = new Connection
connect.inicializar()
module.exports = new Connection;


