import React, {useContext} from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { AttendanceContext } from '../hook/context'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function StudentInfo() {
    const {  toggleStudentModal} = useContext(AttendanceContext)



  return (
    <View className="bg-white m-2 rounded-lg flex-1  h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-100  border-gray-100 border-2">
         <TouchableOpacity
          className=" flex-col space-y-4 items-center justify-center "
          onPress={toggleStudentModal}
        >
          <Image
          source={require('../assets/Image/infromation.png')}
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
        />
          {/* <FontAwesome name="user-plus" size={30} color="blue" style={{ marginRight: 8 }} /> */}
          <Text className="text-red-600 text-md text-center font-bold">Retrieve Student Info
          </Text>
        </TouchableOpacity>
    </View>
  )
}
export default StudentInfo