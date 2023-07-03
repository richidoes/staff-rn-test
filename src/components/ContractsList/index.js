import React from 'react';
import { FlatList, View } from 'react-native';
import ContractCard from '../ContractCard';

export default function ContractsList({ data }) {
  return (
    <FlatList
      className="flex w-full h-full pt-6"
      contentContainerStyle={{ padding: 12 }}
      data={data}
      renderItem={renderItem}
      ListFooterComponent={renderFooter}
    />
  );
}

function renderItem({ item }) {
  return <ContractCard data={item} />;
}

function renderFooter() {
  return (
    <View className="w-full h-24 bg-transparent" />
  );
}
