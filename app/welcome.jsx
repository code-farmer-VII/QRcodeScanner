import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { router } from 'expo-router';

const Index = () => {
    const changeRoute = ()=>{
      router.push('/(auth)/signIn')
    }
  return (
    <View className="flex justify-center items-center bg-blue-500 h-full">
      <Image
        source={require("../assets/AAU-logo.png")} 
        style={{ width: 150, height: 150, marginBottom: 20 }}
        className="pb-6"
        sizeMode="contain"
      />

      <Text className="text-white text-2xl mb-4  ">ADDIS ABABA UNIVERSITY</Text>

      <Text className=" text-sm mb-10 text-gray-200">STUDENT ATTENDANCE SYSTEM</Text>

      <TouchableOpacity onPress={changeRoute} ><Text className="text-white mb-4 bg-red-600 w-full h-10 px-24 rounded-lg text-xl">Welcome</Text></TouchableOpacity>
      <Text className="text-gray-200">powered by Temesgen gonfa</Text>
    </View>
  );
};

export default Index;
