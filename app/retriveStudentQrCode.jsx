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
import { getStudentInfoByQRCode } from "../db/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AttendanceContext } from "../hook/context";


export default function Home() {
    const qrLock = useRef(false);
    const appState = useRef(AppState.currentState);
    const [qrCodeData, setQrCodeData] = useState(null);
    const {singleInfoData , setSingleInfodata} = useContext(AttendanceContext)


    const handleLogData = async () => {
        const userId = await AsyncStorage.getItem("userId");
        const studentData = await getStudentInfoByQRCode(userId, qrCodeData)
        qrLock.current = false; 
        setSingleInfodata(studentData)
        router.push("/home")
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
                    <Pressable className="bg-pink-500 p-2.5 rounded w-full" onPress={handleLogData}>
                        <Text className="text-white text-lg text-center">Search</Text>
                    </Pressable>
                </View>
            )}
            
        </SafeAreaView>
    );
}