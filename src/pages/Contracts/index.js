import React from 'react';
import { View } from 'react-native';
import contractsData from '../../utils/mocks/data.json';
import ContractsList from '../../components/ContractsList';

export default function Contracts() {
  return (
    <View className="flex items-center justify-center bg-slate-100 dark:bg-slate-900">
      <ContractsList data={contractsData.results} />
    </View>
  );
}
