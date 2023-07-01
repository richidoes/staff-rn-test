import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const { toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-slate-800">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Dark mode" onPress={toggleColorScheme} />
    </View>
  );
}
