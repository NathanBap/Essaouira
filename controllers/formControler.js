import path from 'path';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

const showForm = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'contact.html'));
}
const createContact = async(req, res) => {
    req.body.Date = new Date().toLocaleString("fr-FR");
    req.body.Contact = 'Non';

    // Google sheet API
    const doc = await connectSheetApi();
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
    await sheet.addRow(req.body);

    // Redirection
    res.send('Contact created');
}
const connectSheetApi = async () => {
    dotenv.config();
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const docId = process.env.GOOGLE_DOC_ID;

    const serviceAccountAuth = new JWT({
        email: email,
        key: key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(docId, serviceAccountAuth);
    return doc;
}

export { showForm, createContact };