import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { AttendanceContext } from '../hook/context';
import { PickDocument } from '../xlFileManuplation/DocumentPicker';
import { ReadExcelFile } from '../xlFileManuplation/ReadXlFile';

const BottomSheet = ({ visible, onClose }) => {
  const {
    setData,
    setFileName,
    setFileSize,
    setMimeType,
    setFileUri,
    toggleModal
  } = useContext(AttendanceContext);

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
        console.log(data);
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
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <View className="flex-1 justify-end">
        <View className="bg-white rounded-t-lg p-4 shadow-lg">
          <View className="justify-center items-center p-4 rounded-lg">
            <Text className="text-2xl font-bold mb-4">File Upload Requirements</Text>
            <Text className="text-base mb-1">The file must be an Excel (.xl) file.</Text>
            <Text className="text-base mb-1">The following columns are mandatory:</Text>
            <Text className="text-base mb-1">- ID</Text>
            <Text className="text-base mb-1">- name</Text>
            <Text className="text-base mb-1">- college</Text>
            <Text className="text-base mb-1">- department</Text>
            <Text className="text-base mb-1">- section</Text>
            <Text className="text-base mb-1">- QR code</Text>
            <TouchableOpacity onPress={pickDocumentFile} className="bg-blue-600 py-4 px-6 rounded-lg mt-8">
              <Text className="text-white">Okay</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={onClose}
            className="mt-4 bg-blue-500 p-2 rounded"
          >
            <Text className="text-white text-center">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

function ModalDisplay() {
  const { isModalVisible, toggleModal } = useContext(AttendanceContext);

  return (
    <View>
      <BottomSheet visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
}

export default ModalDisplay;
