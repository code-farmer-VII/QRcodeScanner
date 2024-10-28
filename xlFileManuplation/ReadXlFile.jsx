import * as FileSystem from 'expo-file-system';
import * as XLSX from 'xlsx';
import { Buffer } from 'buffer';

export const ReadExcelFile = async (fileUri) => {
    if (!fileUri) {
      alert('No file to read!');
      return;
    }
    try {
      const file = await FileSystem.readAsStringAsync(fileUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const binary = Buffer.from(file, 'base64').toString('binary');
      const workbook = XLSX.read(binary, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  
      // Validate the header
      const requiredColumns = ['id', 'name', 'college', 'department', 'section', 'qrcode'];
      const header = jsonData[0].map((column) => column.toLowerCase());
      
      if (!requiredColumns.every((column) => header.includes(column.toLowerCase()))) {
        alert('The Excel file does not follow the required format. Please make sure the header has the columns: id, name, college, department, section, and qrcode.');
        return;
      }
  
      if (header.length !== new Set(header).size) {
        alert('The Excel file has repeated columns in the header. Please make sure the header columns are unique.');
        return;
      }
  
      const cleanedData = jsonData
        .slice(1) 
        .map((row) => row.filter((cell) => cell !== null && cell !== undefined && cell !== ''))
        .filter((row) => row.length > 0);
        
      if (cleanedData.length === 0) {
        alert('No data to insert. Please make sure the Excel file has data rows.');
        return;
      }
      console.log("the file is readed")
      return cleanedData;
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  };