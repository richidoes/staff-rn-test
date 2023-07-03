import React from 'react';
import { FlatList, View } from 'react-native';
import ContractCard from '../ContractCard';

export default function ContractsList({ data }) {
  const contractsData = data?.results || data;

  return (
    <FlatList
      className="flex w-full h-full pt-6"
      contentContainerStyle={{ padding: 12 }}
      data={contractsData}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
    />
  );
}

function renderItem({ item }) {
  return <ContractCard data={item} key={item?.id} />;
}

function renderFooter() {
  return (
    <View className="w-full h-6 bg-transparent" />
  );
}
