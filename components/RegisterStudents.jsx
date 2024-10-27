import React, {useContext} from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AttendanceContext } from '../hook/context';



function RegisterStudent() {
    const {toggleModal} = useContext(AttendanceContext)

  return (
    <View className="bg-white m-2 rounded-lg flex-1  h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-400  border-gray-100 border-2">
      <TouchableOpacity
        className=" flex-col space-y-4 items-center justify-center "
        onPress={toggleModal}
      >
        <Image
          source={require('../assets/Image/registerStudents.jpg')}
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
        />
        {/* <FontAwesome name="user-plus" size={30} color="blue" style={{ marginRight: 8 }} /> */}
        <Text className="text-red-600 text-md text-center font-bold">Register Students</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterStudent