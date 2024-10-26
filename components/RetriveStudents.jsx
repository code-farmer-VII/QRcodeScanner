import React, {useContext} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AttendanceContext } from '../hook/context'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function RetriveStudents() {
    const {  toggleInputModal 
    } = useContext(AttendanceContext)

  return (
    <View className="bg-blue-500 m-2 rounded-lg flex-1  h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-600  border-blue-600 border-2">
         <TouchableOpacity
          className=" flex-col space-y-4 items-center justify-center "
          onPress={toggleInputModal}
        >
          <FontAwesome name="user-plus" size={20} color="white" style={{ marginRight: 8 }} />
          <Text className="text-white">Retrieve Students
          </Text>
        </TouchableOpacity>
    </View>
  )
}
export default RetriveStudents