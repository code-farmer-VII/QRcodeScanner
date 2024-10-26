import React, {useContext} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AttendanceContext } from '../hook/context';



function RegisterStudent() {
    const {toggleModal} = useContext(AttendanceContext)

  return (
    <View className="bg-blue-500 m-2 rounded-lg flex-1  h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-600  border-blue-600 border-2">
         <TouchableOpacity
          className=" flex-col space-y-4 items-center justify-center "
          onPress={toggleModal}
        >
          <FontAwesome name="user-plus" size={20} color="white" style={{ marginRight: 8 }} />
          <Text className="text-white">Register Students</Text>
        </TouchableOpacity>
    </View>
  )
}

export default RegisterStudent