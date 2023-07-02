import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SafeArea from '../../components/SafeArea';

export default function CustomHeader({ navigation, route }) {
  const onPressHamburgerMenu = navigation?.toggleDrawer;
  const title = route?.name;

  return (
    <SafeArea edges={['top', 'left', 'right']}>
      <View className="flex flex-row w-full h-16 items-center rounded-b-xl bg-white dark:bg-black">
        <HamburgerMenu onPress={onPressHamburgerMenu} />
        <Text className="text-2xl font-bold ml-3 text-black dark:text-white">
          {title}
        </Text>
      </View>
    </SafeArea>
  );
}

function HamburgerMenu({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className="flex justify-center items-center w-12 h-10 ml-2 rounded-xl bg-indigo-600">
      <Ionicons name="menu" color="white" size={30} />
    </TouchableOpacity>
  );
}
