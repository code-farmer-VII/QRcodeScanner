import * as DocumentPicker from 'expo-document-picker';

export const PickDocument = async () => {
    console.log("step 2")
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'], // Only allow spreadsheets
        });
  
        if (!result.canceled) { 
          console.log("step 3")
            return result
        } else {
          console.log('Document picker was cancelled');
        }
      } catch (error) {
        console.error('Error picking document:', error);
      }
    };