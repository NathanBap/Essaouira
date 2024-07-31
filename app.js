import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

const serviceAccountAuth = new JWT({
  // env var values here are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  email: email,
  key: key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet('1k_fITzv0DRhBqNwjj3l7Q2m8kuhJxy7lUipooIIDj9w', serviceAccountAuth);

await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);

const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
console.log(sheet.title);

// append rows
const moreRows = await sheet.addRows([
  { Nom: 'Sergey Brin', Email: 'sergey@google.com' },
  { Nom: 'Eric Schmidt', Email: 'eric@google.com' },
]);

