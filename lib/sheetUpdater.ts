import {google} from 'googleapis'
import { JWT } from 'google-auth-library'; // ✅ correct
import { sheets_v4 , sheets} from 'googleapis/build/src/apis/sheets';

import fs from 'fs'
import path from 'path'
export async function update(data : any){
    try{

const auth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_ID,
  key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});



const s = sheets({ version: 'v4', auth });


const SPREADSHEET_ID = '1oiZpBzH8LhLF1b9oN0w5T8fCFxYjg-iAQPeoRbemDcc'; 
const SHEET_NAME = 'Sheet1'; 

const res = await s.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [data],
      },
})

    }catch(error){
        console.log(error)
        process.exit()
    }
}
