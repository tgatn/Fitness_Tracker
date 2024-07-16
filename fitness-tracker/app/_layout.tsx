import { SplashScreen, Stack } from "expo-router";
import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function Layout() {

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
        }} />
      <Stack.Screen
        name="(workout)"
        options={{
          headerShown: false
        }} />
    </Stack>
  );
}
