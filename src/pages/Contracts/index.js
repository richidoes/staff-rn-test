import React from 'react';
import { View } from 'react-native';
import ContractsList from '../../components/ContractsList';
import Pagination from '../../components/Pagination';
import useGetData from '../../utils/hooks/useGetData';

export default function Contracts() {
  const { data, currentPage, setCurrentPage } = useGetData();

  return (
    <View className="flex items-center justify-center bg-slate-100 dark:bg-slate-900">
      <ContractsList data={data} />
      <Pagination
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </View>
  );
}
