import { router } from 'expo-router';
import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TextInput, Pressable, Alert, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AttendanceContext } from '../hook/context';



function StudentForm() {
  const [studentSchoolId, setStudentSchoolId] = useState('');
  const [fullName, setFullName] = useState('');
  const [section, setSection] = useState('');
  const [department, setDepartment] = useState('');
  const {qrCode} = useContext(AttendanceContext);

  const handleSubmit = () => {
    // Perform form submission logic here
    Alert.alert("Form Submitted", `Student School ID: ${studentSchoolId}
      \nFull Name: ${fullName}
      \nSection: ${section}
      \nDepartment: ${department}
      \nQR Code: ${qrCode}`);
  };
  const QrcodeHandler =()=>{
    router.push("/registerQrCode")
  }

  const cancelHandler = () => {
    setStudentSchoolId('');
    setFullName('');
    setSection('');
    setDepartment('');
    router.push("/")
  };
  return (
    <View className="flex-1 justify-center px-6 bg-gray-100">
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
      <Text className="text-2xl font-bold text-center mb-6">Student Form</Text>
      <TouchableOpacity
            className="bg-gray-200 rounded-lg flex-1 h-full flex-row space-x-4 items-center justify-center shadow-lg shadow-gray-600 border-gray-300 border-2 my-6 py-4"
            onPress={QrcodeHandler}
          >
            <Text className="text-blue-600 font-bold text-lg">QR Code Scan</Text>
            <FontAwesome name="qrcode" size={30} color="red" style={{ marginRight: 8 }} />
          </TouchableOpacity>
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4 text-black"
        placeholder="Student School ID"
        editable={false}
        value={qrCode}
      />
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Student School ID"
        value={studentSchoolId}
        onChangeText={setStudentSchoolId}
      />
      
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Section"
        value={section}
        onChangeText={setSection}
      />
      
      <TextInput
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
      />
      

      
      <Pressable
        className="bg-blue-500 rounded-lg py-3 mb-12"
        onPress={handleSubmit}
      >
        <Text className="text-center text-white font-semibold text-lg">Submit</Text>
      </Pressable>
      <Pressable
        className="bg-red-500 rounded-lg py-2"
        onPress={cancelHandler}
      >
        <Text className="text-center text-white font-semibold text-lg">Cancel</Text>
      </Pressable>
      </ScrollView>
    </View>
  );
}

export default StudentForm;
