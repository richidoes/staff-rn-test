import React, { useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../../styles';
import { createPagesCount } from '../../utils';

export default function Pagination({ currentPage, setPage }) {
  const listRef = useRef();
  const { pages, maxPages } = createPagesCount();

  // move the scroll list when touching a page button
  useEffect(() => {
    listRef.current.scrollToIndex({ index: currentPage - 1, viewPosition: 0.5 });
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage === 1) {
      return;
    }
    setPage((preValue) => preValue - 1);
  };

  const handleNextPage = () => {
    if (currentPage === maxPages) {
      return;
    }
    setPage((preValue) => preValue + 1);
  };

  const onPressPageButton = (page) => {
    if (page === currentPage) {
      return;
    }
    setPage(page);
  };

  return (
    <View className="flex w-full h-[6%] mb-32 flex-row justify-around items-center">
      <ArrowButton name="left" onPress={handlePrevPage} />
      <FlatList
        ref={listRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 6, marginHorizontal: 4 }}
        data={pages}
        scrollToIndex
        renderItem={({ item }) => (
          <PageNumber page={item} currentPage={currentPage} onPress={onPressPageButton} />
        )}
      />
      <ArrowButton name="right" onPress={handleNextPage} />
    </View>
  );
}

function ArrowButton({ name, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} className="flex justify-center items-center w-9 h-9 ml-4 mr-4 rounded-lg bg-indigo-600" style={styles.paginationButtonShadow}>
      <AntDesign name={name} size={26} color="white" />
    </TouchableOpacity>
  );
}

function PageNumber({ page, currentPage, onPress }) {
  const isCurrentPage = page === currentPage;

  return (
    <TouchableOpacity onPress={() => onPress(page)} className={`flex justify-center items-center w-9 h-9 ml-1 mr-1 rounded-lg ${isCurrentPage ? 'bg-indigo-600' : 'bg-white dark:bg-slate-700'}`} style={styles.paginationButtonShadow}>
      <Text className={`font-medium text-2xl ${isCurrentPage ? 'text-white' : 'text-black dark:text-white'}`}>{page}</Text>
    </TouchableOpacity>
  );
}
