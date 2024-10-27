import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image , StatusBar} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RegisterStudent from '../components/RegisterStudents';
import ModalDisplay from '../components/Modal';
import { InputModal } from '../components/InputModal';
import RetriveStudents from '../components/RetriveStudents';
import { StudentInfoModal } from '../components/studentInfoModal';
import StudentInfo from '../components/StudentInfo';
import { router } from 'expo-router';
// 
const { width } = Dimensions.get('window'); // Screen width

export default function App() {
 const Attendance =()=>{ 
  router.push("/home")
}
    
const AddStudent =()=>{ 
  router.push("/home")
}

const QrCodeScanner =()=>{ 
  router.push("/home")
}
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
            <Image
              source={require('../assets/Image/banner1.jpg')}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
         
          </View>
          <View style={[styles.child, { backgroundColor: '#e74c3c' }]}>
          <Image
              source={require('../assets/Image/banner4.jpg')}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
          <View style={[styles.child, { backgroundColor: '#2ecc71' }]}>
          <Image
              source={require('../assets/Image/banner3.jpg')}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        </SwiperFlatList>
      </View>
    </SafeAreaView>
    <View className="flex-1 justify-center items-center bg-white">
      <View className="flex-row flex-1 justify-center items-center px-4 py-4">
        <RegisterStudent />
        <RetriveStudents />
      </View>

      <View className="flex-row flex-1 justify-center items-center px-4 py-4">
        <StudentInfo / >

        <TouchableOpacity
          className="bg-white m-2 rounded-lg flex-1 h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-red-100  border-gray-100 border-2"
          onPress={Attendance}
        >
          <Image
          source={require('../assets/Image/attendance.jpg')}
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
        />
          {/* <FontAwesome name="calendar-check-o" size={30} color="blue" style={{ marginRight: 8 }} /> */}
          <Text className="text-red-600 text-md font-bold">Make Attendance</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row flex-1 justify-center items-center px-4 py-4">
        <TouchableOpacity
          className="bg-white m-2 rounded-lg flex-1 h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-red-100  border-gray-100 border-2"
          onPress={AddStudent}
        >
          <Image
          source={require('../assets/Image/Add.png')}
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
        />
          {/* <FontAwesome name="user-plus" size={30} color="blue" style={{ marginRight: 8 }} /> */}
          <Text className="text-red-600 text-md font-bold">Add Student</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white m-2 rounded-lg flex-1 h-full flex-col space-y-4 items-center justify-center shadow-lg shadow-red-100  border-gray-100 border-2"
          onPress={QrCodeScanner}
        >
          <Image
          source={require('../assets/Image/qr code.png')}
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
        />
          <Text className="text-red-600 text-md font-bold">QR Code Scanner</Text>
        </TouchableOpacity>
      </View>
    </View>
    <ModalDisplay />
    <InputModal />
    <StudentInfoModal/>
    <StatusBar backgroundColor="blue" barStyle="white" />
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
