import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StatusBar } from 'react-native';
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { supabase } from '../../db/supaconfigration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signUpWithEmail } from '../../db/Auth';
import { RegisterTeacher } from '../../db/Auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");

        if (token) {
          router.push("/attendance")
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    // checkLoginStatus();
  }, []);

  const handleSignUp = async () => {
    if (!email || !password) {
      console.log('Please fill in all fields');
      return;
    }
  
    // const { data, error } = await supabase.auth.signUp({
    //   email,
    //   password,
    // });

    const { data, error } = await signUpWithEmail(email, password)
  
    if (error) {
      console.error('Sign-up error:', error.message);
      return { error: error.message };
    }
  
    const session = data.session;
    const userId = session.user.id;
    const accessToken = session.access_token;
    const userEmail = session.user.email;


  
    const { data: teacherData, error: teacherError } = await RegisterTeacher(userId, userEmail, username);

    if (teacherError) {
      console.error('Error adding teacher:');
    } else {
      console.log('Teacher added successfully:');
    }
    AsyncStorage.setItem("accessToken", accessToken);
    AsyncStorage.setItem("userId", userId);
    AsyncStorage.setItem("userEmail", userEmail);
    router.push('/attendance')
    return { user: data.user };
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-700">
      <Text className="text-white text-3xl font-semibold mb-6">Sign Up</Text>

      <View className="flex-row items-center bg-white w-3/4 p-4 mb-4 rounded-lg shadow">
      <Icon name="user" size={20} color="#999" className="mr-3 ml-3" />

        <TextInput
          placeholder="Enter your full name"
          value={username}
          onChangeText={setUsername}
          className="flex-1 border-l-2 border-gray-300 ml-2 pl-2"
          placeholderTextColor="#999"
        />
      </View>
      <View className="flex-row items-center bg-white w-3/4 p-4 mb-4 rounded-lg shadow">
      <Icon name="envelope" size={20} color="#999" className="mr-3 ml-3" />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          className="flex-1 border-l-2 border-gray-300 ml-2 pl-2"
          placeholderTextColor="#999"
        />
      </View>

      <View className="flex-row items-center bg-white w-3/4 p-4 mb-6 rounded-lg shadow">
      <Icon name="lock" size={20} color="#999" className="mr-3 ml-3" />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="flex-1 border-l-2 border-gray-300 ml-2 pl-2"
          placeholderTextColor="#999"
        />
      </View>

      <View className="w-3/4">
        <Button title="Sign Up" onPress={handleSignUp} color="red" />
      </View>
      <View className="flex my-5 flex-row">
        <Text className="text-red-500 text-sm">if you have an account you can</Text>
        <Link href={'/(auth)/signIn'} className='text-red-500 px-3'><Text className="text-white px-4 underline underline-offset-2">signin here</Text></Link>
      </View>
      <StatusBar barStyle="light-content" backgroundColor={'red'}/>

    </View>
  );
};

export default SignUp;
