import {google} from 'googleapis'
import { JWT } from 'google-auth-library'; // ✅ correct
import { sheets_v4 , sheets} from 'googleapis/build/src/apis/sheets';

import fs from 'fs'
import path from 'path'
export async function update(data : any){
    try{

const auth = new JWT({
  email: "snax-797@yatsusquad.iam.gserviceaccount.com",
  key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/xG08w+qK6wDj\n1RTG+/zbpZSwbxN1DnYMOIwpbtce5JZuyP0z/VPl+bmVqGmB7bX9XTz0bgzrsbL/\n02hs9ZFw5ibWn4nOrW5CU3C9IafnkQEH5QREy9G2l5+5GfG5mizPJfdbVHnRugW+\n7b7wPPl3/qCG1zW1K6qjgsdWSQ7V4eTZ0vLzrQ1AMoabjVGC7mK040oa3i2h7//y\nH6dU+ayTgfvJzycB564/EiV1QUbQkjkwt+awIb1GHsoEm9n0znDcZpMUMx6Igyno\nDhZ4u8JVhQroyXLWTJM9jhVTgErxdKAfP89DknknsH6m2eUsajHHjI/9mL/z8pII\nNpsaoRuDAgMBAAECggEAA77lkIhiuYTrY9SpKIikGnKd0jAEb5OXon4TETCDjixr\n2pnqOP/YcC3UPkQ0XCyiLEk/PaaapQEeQtkq+U0QorJnWgDZJorRR2vG0ELq7l7k\nNMNetazl5nM7h1hZr6tMKpDbLh/OMCNtWLRFhJhd5qyedeCYdKn3yTE7c7sbyZMT\nAWIxuuVdVoS2hXGXvxuXDpPfnzWPnXAJlDOvEcZhIIdlHllYgFaW/k7Cu1ffcUpy\nVyUdbsRtnR3F5k3YX5Pmr+Hs25xfQZR4OA+BcvCWBBmCgFRgRjv6q/rcdtcMpJsF\n61Ua0jLYDRKO+doIMog6U8syS9szM9TaWI1F8+Q7yQKBgQDuFpHQJ7RNU3GTQsgH\nXyG5aVRiSLLas1JxDu5cQTxkKbIHiwEYuM4LXSDmhB2X3fIunohWACL6e7XJ9DnI\nkt4sCEXc4+di6VRgi+sSZ//p4Id1bZA++Y1QaezCvanWRMJavvzzfRdi4/YyuC6X\nq8MpwiT2k1C7CzysKqXBJ9ZNawKBgQDOMb7xgKib83aHSKtLKN8qu0NueVHQ7CpI\nqkOyk8eU59up5v+4y6G4JDTVK1+4ttocSpSPz6P4xw2VjpBy4+7525WxyCNSmX+A\nHp3dR4CjlYC7xT4AXT8R4PFJmxMYK7u0jmSLj5eTJsm+5rppaFROT7GyCu30WBId\ngAye64kYSQKBgAie7pav6VpnbBRd9ao2qpzxEGoiob9DgPexB7Z1cj9aNyUIxnhj\nsKo+rANMw1mNYsiHWv5qMNoLArEWU8VMdBj6D7WI1wcA1dpNFqzq8RxB0gXResic\n9p3zx+vhPDYS9Uqd4cDbRa6B/JcnjiBVytJHQllfSiwLox3EyY2t6JeTAoGADAP0\nF4iiyquuTYXbjX6tOoU9EbP6I42PjTp2xXI9IB0+vLDcV/1tyBg8B+wGIPJu1VU3\nQQYdjQK0dPGg00EbDO5R09FQ1aBiQKoIEvv2sBGnNcnxqf3FDhqolNx3iWILByOB\nEmzkrUuGWByD4l6VAxc7yJ9AbIuxSozKr3wUOhkCgYAKM8AX+ufm1EORitom1rRp\nIYgscNDlNZYqliD4LtauW1iUxJUCxEsYI4JRPIHQhZzxiOq5+pBmhn+mWixV0rYM\noe3xnTqbcvAikA+ID4daS4GK4hj2USnQCGRxdBZqsi8FRGA2WNSQxvKwYDsk9Nfb\nZE20jWwTuX2bYFwaxHdfag==\n-----END PRIVATE KEY-----\n",
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
}) ;


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