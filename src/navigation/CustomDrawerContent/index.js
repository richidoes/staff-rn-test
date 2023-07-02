import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import ThemeSwitch from '../../components/ThemeSwitch';

export default function CustomDrawerContent(props) {
  return (
    <View className="relative w-full h-full bg-white dark:bg-black">
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <ThemeSwitch />
    </View>
  );
}
