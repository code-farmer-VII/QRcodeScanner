import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RegisterStudent from '../components/RegisterStudent';
import ModalDisplay from '../components/Modal';
import { InputModal } from '../components/InputModal';
import RetriveStudents from '../components/RetriveStudents';

const { width } = Dimensions.get('window'); // Screen width

export default function App() {
  return (
    <View className="flex-1">
    <SafeAreaView style={{  backgroundColor: 'white' }}>
      <View style={{ height: 200 }}> 
        <SwiperFlatList
          autoplay
          autoplayDelay={2}       
          autoplayLoop
          autoplayLoopKeepAnimation 
          index={0}
          showPagination           
          paginationStyleItem={{   
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 3,
            backgroundColor: 'gray',
          }}
        >
          <View style={[styles.child, { backgroundColor: '#3498db' }]}>
            <Text style={styles.text}>Slide 1</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#e74c3c' }]}>
            <Text style={styles.text}>Slide 2</Text>
          </View>
          <View style={[styles.child, { backgroundColor: '#2ecc71' }]}>
            <Text style={styles.text}>Slide 3</Text>
          </View>
        </SwiperFlatList>
      </View>
    </SafeAreaView>
    <View className="flex-1 justify-center items-center">
      <View className="flex-row flex-1 justify-center items-center px-4 py-4">
        <RegisterStudent />
        <RetriveStudents />
      </View>

      <View className="flex-row flex-1 justify-center items-center px-4 py-4">
        <TouchableOpacity
          className="bg-blue-500 m-2 rounded-lg flex-1 h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-600  border-blue-600 border-2"
          onPress={() => console.log('Retrieve One Student')}
        >
          <FontAwesome name="user" size={20} color="white" style={{ marginRight: 8 }} />
          <Text className="text-white">Retrieve One Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-500 m-2 rounded-lg flex-1 h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-600  border-blue-600 border-2"
          onPress={() => console.log('Make Attendance')}
        >
          <FontAwesome name="calendar-check-o" size={20} color="white" style={{ marginRight: 8 }} />
          <Text className="text-white">Make Attendance</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row flex-1 justify-center items-center px-4 py-4">
        <TouchableOpacity
          className="bg-blue-500 m-2 rounded-lg flex-1 h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-600  border-blue-600 border-2"
          onPress={() => console.log('Add Student')}
        >
          <FontAwesome name="user-plus" size={20} color="white" style={{ marginRight: 8 }} />
          <Text className="text-white">Add Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-500 m-2 rounded-lg flex-1 h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-gray-600  border-blue-600 border-2"
          onPress={() => console.log('QR Code Scanner')}
        >
          <FontAwesome name="qrcode" size={20} color="white" style={{ marginRight: 8 }} />
          <Text className="text-white">QR Code Scanner</Text>
        </TouchableOpacity>
      </View>
    </View>
    <ModalDisplay />
    <InputModal />
    </View>

  );
}

const styles = {
  child: {
    width,  
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, 
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
};
