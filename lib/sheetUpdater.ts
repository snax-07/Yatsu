import { google } from 'googleapis';

export async function update(data: any[]) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_ID,
      key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const SPREADSHEET_ID = '1oiZpBzH8LhLF1b9oN0w5T8fCFxYjg-iAQPeoRbemDcc';
    const SHEET_NAME = 'Sheet1';

    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [data] },
    });

    return res.data;
  } catch (error) {
    console.error('Google Sheets update failed:', error);
    throw error;
  }
}
