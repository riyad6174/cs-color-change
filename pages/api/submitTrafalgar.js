import { google } from 'googleapis';

const handler = async (req, res) => {
  const {
    name,
    email,
    enquiryMessage,
    phoneNumber,
    sheetName,
    location,
    companyName,
  } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          [name, email, phoneNumber, companyName, location, enquiryMessage],
        ],
      },
    });

    console.log(`Rows updated: ${response.data.updates.updatedCells}`);
    res.status(200).json({ message: 'Form data submitted successfully!' });
  } catch (error) {
    console.error('Error inserting data into Google Sheets:', error);
    res.status(400).json({ message: 'Failed to submit form data.', error });
  }
};

export default handler;
