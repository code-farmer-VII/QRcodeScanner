import { Camera, CameraView } from "expo-camera";
import { router, Stack } from "expo-router";
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
import { useContext, useEffect, useRef, useState } from "react";
import { Overlay } from "../components/OverLay";
import { AttendanceContext } from "../hook/context";


export default function Home() {
    
    const qrLock = useRef(false);
    const appState = useRef(AppState.currentState);
    const {qrCode, setQrCode} = useContext(AttendanceContext);


    const handleLogData = () => {
        console.log(qrCode);  
        qrLock.current = false;  
        router.push("/addStudent");        
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
                        setQrCode(data);
                    }
                }}
            />
            <Overlay />
            {qrCode && (
                <View className="absolute bottom-20 left-0 right-0 -translate-x-1/2 items-center bg-gray-900 bg-opacity-70 p-2.5 rounded">
                    <Text className="text-white text-lg mb-2.5">{qrCode}</Text>
                    <Pressable className="bg-blue-500 p-2.5 rounded w-full" onPress={handleLogData}>
                        <Text className="text-white text-lg text-center">Register</Text>
                    </Pressable>
                </View>
            )}
            
        </SafeAreaView>
    );
}