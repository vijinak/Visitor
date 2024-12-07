import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ExcelJS from 'exceljs';

const app =express();
const PORT=5005;
app.use(cors());
app.use(bodyParser.json());


const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet('Visitor Data');

sheet.columns = [
  { header: 'Visitor Name', key: 'visitorName', width: 20 },
  { header: 'Phone Number', key: 'phoneNumber', width: 15 },
  { header: 'Email ID', key: 'email', width: 25 },
  // { header: 'Lead Source', key: 'leadSource', width: 15 },
  { header: 'CP Name', key: 'cpName', width: 20 },
  { header: 'Property', key: 'property', width: 20 },
  // { header: 'Budget', key: 'budget', width: 15 },
];

app.post('/submit', async (req, res) => {
  const data = req.body;

  sheet.addRow({
    visitorName: data.visitorName,
    phoneNumber: data.phoneNumber,
    email: data.email,
    // leadSource: data.leadSource,
    cpName: data.cpName || '',
    property: data.property,
    // budget: data.budget,
  });

  await workbook.xlsx.writeFile('./visitor_report.xlsx');
  res.status(200).send('Data added to Excel sheet!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
