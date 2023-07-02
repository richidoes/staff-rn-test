import { useColorScheme } from 'nativewind';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Contracts() {
  const { toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-slate-100 dark:bg-slate-800">
      <Text>Contracts</Text>
      <Button title="Dark mode" onPress={toggleColorScheme} />
    </View>
  );
}
