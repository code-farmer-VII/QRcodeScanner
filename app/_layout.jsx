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

        }}>
        <Stack.Screen name="index" options={{
          headerTitle: 'Attendance App',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name="home" options={{}} />
      </Stack>
    </AttendanceProvider>
  );
}
