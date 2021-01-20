    const creds = require('./camara-302118-4508d2118ba2.json')
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { client_email, private_key } = creds
const TOKEN_KEY = private_key
const TOKEN_EMAIL = client_email

async function  Login(){
      const doc = new  GoogleSpreadsheet('1WurZUFQZUQrnoEexbx673q8P5LMT6fpV-RUucrI7Mq4')
      await doc.useServiceAccountAuth({
          client_email: TOKEN_EMAIL,
          private_key: TOKEN_KEY
          
      })
      await doc.loadInfo();


      let sheet = await doc.sheetsByIndex[1]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
      
      let rows = await sheet.getRows()

      rows.forEach(row => {
          console.log(row)
      })
      
      
     
     

}

Login().catch((err) => console.log(err))



