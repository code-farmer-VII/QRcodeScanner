import { Camera, CameraView } from "expo-camera";
import { Stack } from "expo-router";
import {
    AppState,
    Linking,
    Platform,
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Overlay } from "../components/OverLay";
import { recordStudentAttendance } from "../db/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    const qrLock = useRef(false);
    const appState = useRef(AppState.currentState);
    const [qrCodeData, setQrCodeData] = useState(null);

    const handleLogData = async () => {
        const userId = await AsyncStorage.getItem("userId");
        recordStudentAttendance(userId, qrCodeData ) 
        console.log(qrCodeData);  
        qrLock.current = false;  
        setQrCodeData(null);
      };


    useEffect(() => {
        const subscription = AppState.addEventListener("change", (nextAppState) => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === "active"
            ) {
                qrLock.current = false;
            }
            appState.current = nextAppState;
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <SafeAreaView style={StyleSheet.absoluteFillObject}>
            <Stack.Screen
                options={{
                    title: "Overview",
                    headerShown: false,
                }}
            />
            {Platform.OS === "android" ? <StatusBar hidden /> : null}
            <CameraView
                style={StyleSheet.absoluteFillObject}
                facing="back"
                onBarcodeScanned={({ data }) => {
                    if (data && !qrLock.current) {
                        qrLock.current = true;
                        setQrCodeData(data);
                    }
                }}
            />
            <Overlay />
            {qrCodeData && (
                <View className="absolute bottom-20 left-0 right-0 -translate-x-1/2 items-center bg-gray-900 bg-opacity-70 p-2.5 rounded">
                    <Text className="text-white text-lg mb-2.5">{qrCodeData}</Text>
                    <Pressable className="bg-red-500 p-2.5 rounded w-full" onPress={handleLogData}>
                        <Text className="text-white text-lg text-center">Attend</Text>
                    </Pressable>
                </View>
            )}
            
        </SafeAreaView>
    );
}