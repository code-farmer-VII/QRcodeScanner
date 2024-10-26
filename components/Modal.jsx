import React, {useContext} from 'react'
import { View , Text, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import { AttendanceContext } from '../hook/context';
import { PickDocument } from '../xlFileManuplation/DocumentPicker';
import { ReadExcelFile } from '../xlFileManuplation/ReadXlFile';


function ModalDisplay() {

      const {  isModalVisible, setModalVisible, toggleModal,
        data, setData, fileUri, setFileUri, fileName, setFileName, mimeType, setMimeType, fileSize, setFileSize
        } = useContext(AttendanceContext)

      const pickDocumentFile = async () => {
        setData(null);
        setFileName(null);
        setFileSize(null);
        setMimeType(null);
        setFileUri(null);
    
        toggleModal();
    
        const result = await PickDocument();
    
        if (result && result.assets && result.assets.length > 0) {
          const fileUri = result.assets[0].uri;
    
          setFileUri(fileUri);
          console.log(fileUri);
    
    
          if (fileUri) {
            const data = await ReadExcelFile(fileUri);
            if (data) {
              console.log("Excel file data:", data);
              setData(data);
              setFileName(result.assets[0].name);
              setMimeType(result.assets[0].mimeType);
              setFileSize(result.assets[0].size);
            }
    
          } else {
            console.error('No file URI found.');
          }
        } else {
          console.error('No file selected.');
        }
      };

  return (
    <View>
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View className="justify-center items-center p-4 bg-gray-100 rounded-lg">
            <Text className="text-2xl font-bold mb-4">File Upload Requirements</Text>
            <Text className="text-base mb-1">The file must be an Excel (.xl) file.</Text>
            <Text className="text-base mb-1">The following columns are mandatory:</Text>
            <Text className="text-base mb-1">- ID</Text>
            <Text className="text-base mb-1">- name</Text>
            <Text className="text-base mb-1">- collage</Text>
            <Text className="text-base mb-1">- department</Text>
            <Text className="text-base mb-1">- Section</Text>
            <Text className="text-base mb-1">- qr code</Text>
            <TouchableOpacity onPress={pickDocumentFile} className="bg-blue-600 py-4 px-6 rounded-lg mt-8">
              <Text className="text-white">Okay</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  )
}

export default ModalDisplay