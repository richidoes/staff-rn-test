import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomHeader(props) {
  return (
    <SafeAreaView className="bg-white dark:bg-black" {...props}>
      {props.children}
    </SafeAreaView>
  );
}
