import React from 'react';
import { View, Text } from 'react-native';

export default function ContractDetails({ route }) {
  const data = route?.params?.data;

  return (
    <View><Text>ContractDetails</Text></View>
  );
}
