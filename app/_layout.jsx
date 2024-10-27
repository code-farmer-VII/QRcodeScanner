import { Stack } from 'expo-router';
import { AttendanceProvider } from '../hook/context';

export default function Layout() {
  return (
    <AttendanceProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}
              initialRouteName="welcome"
        >
        <Stack.Screen
        name="welcome"
        options={{
          headerShown: false, 
        }}
      />
        <Stack.Screen
        name="(auth)" 
        options={{
          headerShown: false, 
        }}
      />
        <Stack.Screen name="index" options={{
          headerTitle: 'Attendance App',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />
          <Stack.Screen name="home" options={{
          headerTitle: 'Home',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />

<Stack.Screen name="QrCodeScanner" options={{
          headerTitle: 'QrCodeScanner',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />
<Stack.Screen name="addStudent" options={{
          headerTitle: 'Add Student',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />
<Stack.Screen name="registerQrCode" options={{
          headerTitle: 'Register QrCode',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />
<Stack.Screen name="retriveStudentQrCode" options={{
          headerTitle: 'Retrive Student QrCode',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />
<Stack.Screen name="scanner" options={{
          headerTitle: 'Scanner',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />

      </Stack>
    </AttendanceProvider>
  );
}
