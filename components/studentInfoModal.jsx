import React, { useContext } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { AttendanceContext } from '../hook/context';
import { router } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useCameraPermissions } from "expo-camera";
import { useState } from 'react';
import { getStudentInfoByStudent_id } from '../db/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const StudentInfoModal = () => {
  const { isStudentModal, toggleStudentModal } = useContext(AttendanceContext)
  const [permission, requestPermission] = useCameraPermissions();
  const [studentId, setStudentId] = useState('');
  const isPermissionGranted = Boolean(permission?.granted);
  const {singleInfoData , setSingleInfodata} = useContext(AttendanceContext)

  const RetriveStudentsQrCode = () => {
    requestPermission();
    router.push("/retriveStudentQrCode")
    toggleStudentModal()
  }
  const RetriveStudentsStudent_id =async ()=>{
   const userId = await AsyncStorage.getItem("userId");
   const response = await getStudentInfoByStudent_id(userId, studentId)
   setSingleInfodata(response)
   router.push("/home")
   console.log(response);
  }
  return (
    <Modal 
    isVisible={isStudentModal}
    onBackdropPress={toggleStudentModal} 
    backdropOpacity={0.3}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <View className="bg-gray-50 p-5 rounded-lg">
        <Text className="text-lg font-bold mb-3">Enter Student Id</Text>
        <View className="flex flex-row justify-center items-center border-2 border-gray-200 mb-9 rounded-lg">
        <TextInput
          placeholder="Enter Student Id"
          value={studentId}
          onChangeText={setStudentId}
          keyboardType="numeric"
          className=" px-4 rounded-lg text-lg flex-1"
        />
        <TouchableOpacity className="bg-gray-200 p-2  ">
        <FontAwesome onPress={RetriveStudentsStudent_id} name="search" size={20} color="blue"   />
        </TouchableOpacity>
        </View>
        <View className="flex h-16">
          <TouchableOpacity
            className="bg-gray-200 rounded-lg flex-1 h-full flex-row space-x-4 items-center justify-center shadow-lg shadow-gray-600 border-gray-300 border-2"
            onPress={RetriveStudentsQrCode}
          >
            <Text className="text-blue-600"> or you can search byQR Code Scanner</Text>
            <FontAwesome name="qrcode" size={20} color="red" style={{ marginRight: 8 }} />
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  )
}