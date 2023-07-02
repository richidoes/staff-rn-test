import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';

export default function ThemeSwitch() {
  const { toggleColorScheme, colorScheme } = useColorScheme();
  const isDarkTheme = colorScheme === 'dark';

  return (
    <Pressable
      id="themeSwitch"
      onPress={toggleColorScheme}
      className="flex justify-center items-center w-16 h-14 rounded-xl bg-slate-100 dark:bg-indigo-600 absolute bottom-8 right-2"
    >
      {isDarkTheme ? <Feather name="moon" color="white" size={35} />
        : <Feather name="sun" color="#22C55E" size={35} />}
    </Pressable>
  );
}
