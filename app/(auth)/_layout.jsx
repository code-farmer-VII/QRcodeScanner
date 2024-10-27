import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="signIn"
        options={{
          headerShown: false, 
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          headerShown: false, 
        }}
      />
    </Stack>
  );
}
